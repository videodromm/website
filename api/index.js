import express from 'express';
import data from '../src/data/uniforms';

const router = express.Router();
const uniforms = data.uniforms.reduce((obj, uniform) => {
  obj[uniform.id] = uniform;
  return obj;
}, {});

router.get('/uniforms', (req, res) => {
  // convert array to object
  res.send({
    uniforms: uniforms
  });
});

router.get('/uniforms/:uniformId', (req, res) => {
  let uniform = uniforms[req.params.uniformId];
  uniform.description = 'yo';
  res.send(uniform);
});

export default router;