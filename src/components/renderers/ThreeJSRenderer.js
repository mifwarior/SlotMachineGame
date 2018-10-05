import * as THREE from 'three';
import React from 'react';

export default class ThreeJSRenderer extends React.Component {
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
    this.lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5 } );

    this.geometry = new THREE.CylinderGeometry( 10, 10, 5, 20 );
    this.groups = [];

    for(let i = 0; i < 3; i++){
      const lines = new THREE.LineSegments( this.geometry, this.lineMaterial );
      const cylinder = new THREE.Mesh( this.geometry, this.material );
      cylinder.rotation.z = Math.PI * 0.5;
      lines.rotation.z = Math.PI * 0.5;
      
      const group = new THREE.Group();
      group.position.x = -6 + 6 *i;
      group.add(cylinder);
      group.add(lines);
      this.groups.push(group);
      this.scene.add(group);
    }

    this.draw = this.draw.bind(this);
    // ---------------

    this.canvasRef = React.createRef();

  }

  

  initRender(){
    const canvas = this.canvasRef.current;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( canvas.clientWidth, canvas.clientHeight );
    this.renderer.setClearColor( 0x000000, 1 );
    this.camera = new THREE.PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight, 0.1, 50 );
    this.camera.position.z = 30;
    this.camera.updateProjectionMatrix();

    window.addEventListener( 'resize', () => {

      const canvas = this.canvasRef.current;
      const parent = canvas.parentElement;

      this.camera.aspect = parent.clientWidth / parent.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( parent.clientWidth, parent.clientHeight );
    }, false );
  }

  draw(time) {
    this.animationFrameId = requestAnimationFrame(this.draw);

    let dt = (time-this.lastTime)*0.0001;
    this.lastTime = time;

    const speed = 1;
    
    for(let i = 0; i < this.groups.length; i++)
    {
      this.groups[i].rotation.x += dt * speed * i;
    }
  
    this.renderer.render(this.scene, this.camera);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  render(){
    console.log("render");
    return (<canvas className="canvas" ref={this.canvasRef}></canvas>)
  }

  shouldComponentUpdate() {
    return false;
  }
  
  componentDidMount(){
    console.log("componentDidMount");
    this.initRender();
    this.draw(0);
  }
  componentWillUnmount() {
    if(this.animationFrameId == -1) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = -1;
    }
    window.removeEventListener("resize");
  }

}
