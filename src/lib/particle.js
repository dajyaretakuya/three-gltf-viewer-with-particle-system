import { vertexShader, fragmentShader } from './shaders'
import Tween from './tween'
import {
  AdditiveBlending,
  AmbientLight,
  AnimationMixer,
  AxesHelper,
  BufferAttribute,
  BufferGeometry,
  Box3,
  Color,
  Cache,
  DirectionalLight,
  GridHelper,
  HemisphereLight,
  LinearEncoding,
  LoaderUtils,
  LoadingManager,
  NormalBlending,
  Points,
  PMREMGenerator,
  PerspectiveCamera,
  REVISION,
  Scene,
  SkeletonHelper,
  TextureLoader,
  Vector3,
  WebGLRenderer,
  sRGBEncoding,
  ShaderMaterial
} from 'three'

const DEG2RAD = Math.PI / 180

class Particle {
  
  constructor() {
    
    this.position = new Vector3()
    this.velocity = new Vector3()
    this.acceleration = new Vector3()
    
    this.angle = 0
    this.angleVelocity = 0
    this.angleAcceleration = 0
    this.size = 16
    this.color = new Color()
    this.opacity = 1

    this.age = 0
    this.alive = 0

    this.sizeTween = null
    this.colorTween = null
    this.opacityTween = null
  }

  update(dt) {
    // this.position.add(this.velocity.clone().multiplyScalar(dt))
    this.velocity.add(this.acceleration.clone().multiplyScalar(dt))
    this.angle += this.angleVelocity * DEG2RAD * dt
    this.angleVelocity += this.angleAcceleration * DEG2RAD * dt
    this.age += dt

    if(this.sizeTween.times.length > 0) {
      this.size = this.sizeTween.lerp(this.age)
    }

    if(this.colorTween.times.length > 0) {
      const colorHSL = this.colorTween.lerp(this.age)
      this.color = new Color().setHSL(colorHSL.x, colorHSL.y, colorHSL.z)
    }

    if(this.opacityTween.times.length > 0) {
      this.opacity = this.opacityTween.lerp(this.age)
    }
  }

}

export default Particle