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

export default {
  randomValue(min, max) {
    return min + max * (Math.random() - 0.5)
  },
  randomVector3(min, max) {
    const rand3 = new Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
	  return new Vector3().addVectors(min, new Vector3().multiplyVectors(max, rand3))
  }
}