import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = uniformId => {
  if (uniformId) {
    return `${config.serverUrl}/api/uniforms/${uniformId}`;
  }
  return `${config.serverUrl}/api/uniforms`;
};

const getInitialData = (uniformId, apiData) => {
  if (uniformId) {
    return {
      currentUniformId: apiData.id,
      uniforms: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    uniforms: apiData.uniforms
  };
};

// fetch data from the api
const serverRender = (uniformId) =>
  axios.get(getApiUrl(uniformId))
    .then(resp => {
      const initialData = getInitialData(uniformId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      }; 
    });

export default serverRender;