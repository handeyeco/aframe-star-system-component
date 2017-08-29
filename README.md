# Quick way to add stars to your A-Frame project

* [Basic Usage](#basic-usage)
* [Demo](#demo)
* [Properties](#properties)

## Basic Usage

Getting started is easy, just import A-Frame and Star-System:

``` html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.6.1/aframe-master.js"></script>
    <script src="./index.js"></script>
</head>
<body>
    <a-scene>
        <a-sky color="black"></a-sky>
        <a-entity star-system></a-entity>
    </a-scene>
</body>
</html>
```

If things get bogged down, you may try less particles (stars):

``` html
<a-entity star-system="starCount: 1000; sphereCount: 1"></a-entity>
```

But you also might want to try more:

``` html
<a-entity star-system="starCount: 10000; sphereCount: 10; radius: 250"></a-entity>
```

Or offset the sphere of stars:

``` html
<a-entity position="0 0 -250" star-system></a-entity>
```

# Demo

[Demo Link](https://matthewbryancurtis.github.io/aframe-star-system-component/)

Demo code:

``` html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.6.1/aframe-master.js"></script>
    <script src="./index.js"></script>
</head>
<body>
    <a-scene>
        <a-sky color="black"></a-sky>
        <a-entity star-system></a-entity>
    </a-scene>
</body>
</html>
```

## Properties

The way this works is it creates a bunch of particles (stars) in THREE. It creates several star spheres around a a central point (where the star-system is positioned); each sphere has starCount stars. You can set the distance from the central point and the distance between spheres. You can also load a custom sprite to replace the squares that THREE.PointsMaterial() makes.

| Property    | Type   | Default | Description                                         |
|-------------|--------|---------|-----------------------------------------------------|
| color       | String | '#FFF'  | Color of the star particles                         |
| radius      | Number | 300     | Distance from center of sphere to first star sphere |
| depth       | Number | 100     | Distance between star spheres                       |
| starSize    | Number | 1       | Size of each individual star                        |
| starCount   | Number | 3000    | Number of stars per star sphere                     |
| sphereCount | Number | 3       | Number of star spheres                              |
| texture     | Asset  | ''      | Sprite used for individual stars (ex: PNG image)    |
