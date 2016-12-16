import axios from 'axios';

export const fetchUniform = uniformId => {
    return axios.get(`/api/uniforms/${uniformId}`)
                .then(resp => resp.data);
}