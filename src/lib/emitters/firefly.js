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


class FireflyEmitter extends Emitter {

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
      
      texture: new TextureLoader().load(require('../../img/spark.png')),

      size: 30.0,
      sizeRange: 2.0,
      opacityTween: new Tween([0.0, 1.0, 1.1, 2.0, 2.1, 3.0, 3.1, 4.0, 4.1, 5.0, 5.1, 6.0, 6.1],[0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2]),				
      color: new Vector3(0.30, 1.0, 0.6), 
      colorRange: new Vector3(0.3, 0.0, 0.0),
      particlesPerSecond: 20,
      particleDeathAge: 6.1,		
      deathAge: 600
    })
  }

}

export default FireflyEmitter