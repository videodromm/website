import axios from 'axios';

export const fetchShader = shaderId => {
  return axios.get(`/api/shaders/${shaderId}`)
              .then(resp => resp.data);
};

export const fetchShaderList = () => {
  return axios.get('/api/shaders')
              .then(resp => resp.data.shaders);
};