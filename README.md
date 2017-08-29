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
<a-entity star-system="count: 1000; radius: 250; depth: 0"></a-entity>
```

But you also might want to try more:

``` html
<a-entity star-system="count: 100000"></a-entity>
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

The way this works is it creates a bunch of particles (stars) in THREE. The particles are randomly placed between two spheres: sphere of radius 'radius' and sphere of radius 'radius + depth'. You can also load a custom sprite to replace the squares that THREE.PointsMaterial() makes.

| Property    | Type   | Default | Description                                         |
|-------------|--------|---------|-----------------------------------------------------|
| color       | String | '#FFF'  | Color of the star particles                         |
| radius      | Number | 300     | Distance from center of sphere to first star sphere |
| depth       | Number | 300     | Distance between star spheres                       |
| starSize    | Number | 1       | Size of each individual star                        |
| count       | Number | 10000   | Number of total stars created                       |
| texture     | Asset  | ''      | Sprite used for individual stars (ex: PNG image)    |
