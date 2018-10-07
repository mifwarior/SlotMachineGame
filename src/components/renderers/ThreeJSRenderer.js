import * as THREE from 'three';
import React from 'react';

export default class ThreeJSRenderer extends React.Component {
  constructor(...args) {
    super(...args);

    this.cylindetSegments = this.props.symbols;
    this.angle = 2 * Math.PI / this.cylindetSegments;
    this.completeAnimate = 0;

    // ---------- for threejs
    this.lastTime = 0;
    this.animationFrameId = -1;

    this.renderer = null;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();

    var lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 0, 100); // front

    lights[1].position.set(0, 200, 100);
    lights[2].position.set(- 100, - 200, - 100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    this.textures = this.loadTextures();

    this.meshMaterial = this.createMeshMaterial(this.textures);
    this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });

    this.groups = [];

    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.CylinderGeometry(10, 10, 5, this.cylindetSegments, 1, false);
      const lines = new THREE.LineSegments(geometry, this.lineMaterial);
      const cylinder = new THREE.Mesh(geometry, this.meshMaterial);
      cylinder.rotation.z = Math.PI * 0.5;
      lines.rotation.x = cylinder.rotation.x = this.angle * 0.5;
      lines.rotation.z = Math.PI * 0.5;

      const group = new THREE.Group();
      group.position.x = -5.2 + 5.2 * i;
      group.add(cylinder);
      group.add(lines);
      group.cylinder = geometry;

      this.groups.push(group);
      this.scene.add(group);

      this.randomizeFaces(geometry, this.textures.length);
    }

    this.draw = this.draw.bind(this);
    // ---------------

    this.canvasRef = React.createRef();
  }


  initRender() {
    const canvas = this.canvasRef.current;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setClearColor(0x000000, 1);
    this.camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 50);
    this.camera.position.z = 30;
    this.camera.updateProjectionMatrix();

    window.addEventListener('resize', () => {

      const canvas = this.canvasRef.current;
      const parent = canvas.parentElement;

      this.camera.aspect = parent.clientWidth / parent.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(parent.clientWidth, parent.clientHeight);
    }, false);

  }

  randomizeFaces(geometry, materialCount) {

    for (let i = 0; i < geometry.faces.length; i += 2) {
      const materialIndex = i % materialCount;

      geometry.faces[i].materialIndex = materialIndex;
      geometry.faces[i + 1].materialIndex = materialIndex;
    }
  }

  createMeshMaterial(textures) {

    const materials = [];
    for (let i = 0; i < textures.length; i++) {
      const texture = textures[i];
      materials.push(new THREE.MeshPhongMaterial({ map: texture, color:0x156289, emissive:0x000000, side: THREE.DoubleSide, flatShading: true }));
    }
    return new THREE.MeshFaceMaterial(materials);
  }

  loadTextures() {
    const textures = [
      this.loadTexture("assets/symbolA.png"),
      this.loadTexture("assets/symbolB.png"),
      this.loadTexture("assets/symbolC.png"),
      this.loadTexture("assets/symbolD.png"),
      this.loadTexture("assets/symbolE.png"),
    ];
    return textures;
  }

  loadTexture(url) {
    var texture = new THREE.TextureLoader().load(url);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.2, 20);
    texture.rotation = -Math.PI / 2;
    return texture;
  }

  draw(time) {
    const { onTick, onComplete } = this.props;
    this.animationFrameId = requestAnimationFrame(this.draw);

    let dt = (time - this.lastTime) * 0.0001;
    this.lastTime = time;

    const speed = 200;

    let complete = 0;

    for (let i = 0; i < this.groups.length; i++) {
      const group = this.groups[i];

      if (group.nextRotate !== undefined) {

        if (group.nextRotate > group.rotation.x) {

          let dRot = this.angle * dt * speed;

          let ticksBefore = (group.rotation.x / this.angle) | 0;
          group.rotation.x += dRot;
          let ticksAfter = (group.rotation.x / this.angle) | 0;

          if (ticksBefore < ticksAfter) {
            if (onTick) {
              onTick();
            }
          }
        } else {
          complete++;
          group.rotation.x = group.nextRotate;
        }
      }
    }

    if (this.completeAnimate !== complete && complete === this.groups.length) {
      this.completeAnimate = complete;
      if (onComplete) {
        onComplete();
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (<canvas className="canvas" ref={this.canvasRef}></canvas>)
  }

  componentWillReceiveProps(nextProps) {
    this.completeAnimate = 0;
    const { result } = nextProps;

    console.log("Result:", result)
    for (let i = 0; i < this.groups.length; i++) {
      const randRounds = 2 * Math.PI * (1 + (Math.random() * 4) | 0);

      const group = this.groups[i];
      group.nextRotate = result[i] * this.angle + randRounds;
      group.rotation.x = 0;
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.initRender();
    this.draw(0);
  }
  componentWillUnmount() {
    if (this.animationFrameId === -1) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = -1;
    }
    window.removeEventListener("resize");
  }

}
