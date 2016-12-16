import express from 'express';
import data from '../src/data/shaders';

const router = express.Router();
const shaders = data.shaders.reduce((obj, shader) => {
  obj[shader.id] = shader;
  return obj;
}, {});

router.get('/shaders', (req, res) => {
  // convert array to object
  res.send({
    shaders: shaders
  });
});

router.get('/shaders/:shaderId', (req, res) => {
  let shader = shaders[req.params.shaderId];
  shader.description = 'yo';
  res.send(shader);
});

export default router;