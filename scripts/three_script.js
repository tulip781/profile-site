var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(localStorage.getItem("usercolour"));
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();



//scene.add(mesh);#D3D3D3

var geometry = new THREE.BoxGeometry(2,1,.1);



var texture = new THREE.TextureLoader().load( "../images/icarebnb2.png" );
var material = new THREE.MeshBasicMaterial( { map: texture } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );




var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(0,0,0);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 2, 1000)
light.position.set(0,0,25);
scene.add(light);

let pageX
let pageY
const mover = (e) => {

  pageX = ((e.pageX / window.innerWidth) * 0.4) - 0.2;
  pageY = ((e.pageY / window.innerHeight) * 0.4) - 0.2;
  cube.rotation.x =  pageY;
  cube.rotation.y = pageX;
}


var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
}


window.addEventListener('mousemove', mover);
window.addEventListener('touchmove', mover);


render();
