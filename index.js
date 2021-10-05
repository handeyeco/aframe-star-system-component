/*
 * ~ SCHEMA ~
 *  color       <String>: color of the stars
 *  radius      <Number>: distance from center of sphere to first star sphere
 *  depth       <Number>: distance between star spheres
 *  size        <Number>: size of each individual star
 *  count       <Number>: number of stars per star sphere
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
      default: 300,
      min: 0,
    },
    depth: {
      type: 'number',
      default: 300,
      min: 0,
    },
    size: {
      type: 'number',
      default: 1,
      min: 0,
    },
    count: {
      type: 'number',
      default: 10000,
      min: 0,
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

    // Randomly create the vertices for the stars
    const points = [];
    while (points.length < this.data.count) {
        points.push(this.randomVectorBetweenSpheres(this.data.radius, this.data.depth));
    }
    const stars = new THREE.BufferGeometry().setFromPoints(points);

    // Set the star display options
    const starMaterial = new THREE.PointsMaterial(Object.assign(texture, {
      color: this.data.color,
      size: this.data.size
    }));

    // Add the star particles to the element
    this.el.setObject3D('star-system', new THREE.Points(stars, starMaterial));
  },

  remove: function() {
    this.el.removeObject3D('star-system');
  },

  // Returns a random vector between the inner sphere
  // and the outer sphere created with radius + depth
  randomVectorBetweenSpheres: function(radius, depth) {
    const randomRadius = Math.floor(Math.random() * (radius + depth - radius + 1) + radius);
    return this.randomSphereSurfaceVector(randomRadius);
  },

  // Returns a vector on the face of sphere with given radius
  randomSphereSurfaceVector: function(radius) {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }
});
