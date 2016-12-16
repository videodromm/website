import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = shaderId => {
  if (shaderId) {
    return `${config.serverUrl}/api/shaders/${shaderId}`;
  }
  return `${config.serverUrl}/api/shaders`;
};

const getInitialData = (shaderId, apiData) => {
  if (shaderId) {
    return {
      currentShaderId: apiData.id,
      shaders: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    shaders: apiData.shaders
  };
};

// fetch data from the api
const serverRender = (shaderId) =>
  axios.get(getApiUrl(shaderId))
    .then(resp => {
      const initialData = getInitialData(shaderId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      }; 
    });

export default serverRender;