import axios from 'axios';

export const fetchUniform = uniformId => {
  return axios.get(`/api/uniforms/${uniformId}`)
              .then(resp => resp.data);
};

export const fetchUniformList = () => {
  return axios.get('/api/uniforms')
              .then(resp => resp.data.uniforms);
};