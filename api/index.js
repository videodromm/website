import express from 'express';
import data from '../src/data/uniforms';

const router = express.Router();

router.get('/uniforms', (req, res) => {
    res.send({uniforms: data.uniforms}  );
});

export default router;