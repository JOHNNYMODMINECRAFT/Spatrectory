const container = document.getElementById('globeContainer');

const world = Globe()(container)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')   
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') 
  
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')                                       
  .showAtmosphere(true)
  .atmosphereColor('#3794f8')                                          
  .atmosphereAltitude(0.15);

// earth go round and round baby
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.4;