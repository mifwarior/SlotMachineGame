import THREE from 'Three';
import React from 'react';

class ThreeJSRenderer extends React.Component {
  constructor(...args){
    super(...args);

    // ---------- for threejs
    this.lastTime = 0;
    this.animationFrameId = -1;

    this.renderer = null;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();

    var lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );

    this.meshMaterial = new THREE.MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true } );
    this.geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    this.cylinder = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cylinder );

    this.draw = this.draw.bind(this);
    // ---------------

  }
  initRender(){
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setClearColor( 0x000000, 1 );
  }

  draw(time) {
    this.animationFrameId = requestAnimationFrame(this.draw);

    let dt = (time-this.lastTime)*0.0001;
    this.lastTime = time;

    if(this.cylinder) {
      this.cylinder.rotation.x += dt
    }
  
    this.renderer.render(this.scene, this.camera);
  }


  shouldComponentUpdate() {
    return false;
  }
  
  componentWillUnmount() {
    if(this.animationFrameId == -1) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = -1;
    }
  }

}