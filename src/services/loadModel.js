import * as tf from '@tensorflow/tfjs-node';

async function loadModel() {
  const modelUrl = 'https://storage.googleapis.com/mlgc_bucket1/model-in-prod/model.json';  // Ganti dengan path atau URL model Anda
  const model = await tf.loadGraphModel(modelUrl);
  return model;
}
