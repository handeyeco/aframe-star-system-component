/*
* ~ SCHEMA ~
*  color       <String>: color of the stars
*  radius      <Number>: distance from center of sphere to first star sphere
*  depth       <Number>: distance between star spheres
*  starSize    <Number>: size of each individual star
*  starCount   <Number>: number of stars per star sphere
*  sphereCount <Number>: number of star spheres
*  texture     <Asset>:  sprite used for individual stars
*/

AFRAME.registerComponent('star-system', {
  schema: {
    color: {
      type: 'string',
      default: "#FFF"
    },
    radius: {
      type: 'number',
      default: 300
    },
    depth: {
      type: 'number',
      default: 100
    },
    starSize: {
      type: 'number',
      default: 1
    },
    starCount: {
      type: 'number',
      default: 3000
    },
    sphereCount: {
      type: 'number',
      default: 3
    },
    texture: {
      type: 'asset',
      default: ''
    }
  },

  update: function() {
    // Check for and load star sprite
    let texture = {};
    if (this.data.texture) {
      texture.transparent = true;
      texture.map = new THREE.TextureLoader().load(this.data.texture);
    }

    const stars = new THREE.Geometry();

    // Create i * j stars
    // where i is the number of stars per sphere and j is the number of spheres
    for (let i = 0; i < this.data.starCount; i++) {
      for (let j = 0; j < this.data.sphereCount; j++) {
        stars.vertices.push(new THREE.Vector3(...this.randomSpherePoint(this.data.radius + this.data.depth * j)))
      }
    }

    // Set the star display options
    const starMaterial = new THREE.PointsMaterial(Object.assign(texture, {
      color: this.data.color,
      size: this.data.starSize
    }));

    // Add the star particles to the element
    this.el.setObject3D('particle-system', new THREE.Points(stars, starMaterial));
  },

  // Helper function to randomly place stars on spheres
  randomSpherePoint: function(radius) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return [x, y, z];
  }
});
