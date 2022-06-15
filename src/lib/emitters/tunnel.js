import Emitter from '../emitter'
import Tween from '../tween'
import { Shape } from '../const'
import {
  AdditiveBlending,
  AmbientLight,
  AnimationMixer,
  AxesHelper,
  Box3,
  Cache,
  DirectionalLight,
  GridHelper,
  HemisphereLight,
  LinearEncoding,
  LoaderUtils,
  LoadingManager,
  PMREMGenerator,
  PerspectiveCamera,
  REVISION,
  Scene,
  SkeletonHelper,
  TextureLoader,
  Vector3,
  WebGLRenderer,
  sRGBEncoding,
} from 'three'

class TunnelEmitter extends Emitter {

  constructor() {
    super({
      positionShape: Shape.CUBE,
      position: new Vector3(0, -20, 0),
      positionRange: new Vector3(10, 10, 10),

      velocityShape: Shape.CUBE,
      velocity: new Vector3(0, 100, 0),
      velocityRange: new Vector3(20, 40, 20), 
      
      angle: 0,
      angleRange: 720,
      angleVelocity: 10,
      angleVelocityRange: 0,
      
      texture: new TextureLoader().load(require('../../img/spikey.png')),

      size: 8.0,
      sizeRange: 20.0,				
      color: new Vector3(0.15, 1.0, 0.8),
      colorRange: new Vector3(1, 1, 1),
      opacity: 1,
      blendMode: AdditiveBlending,

      particlesPerSecond: 500,
      particleDeathAge: 1,		
      deathAge: 60
    })
  }

}

export default TunnelEmitter