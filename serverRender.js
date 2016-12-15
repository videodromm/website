import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

// fetch data from the api
const serverRender = () =>
axios.get(`${config.serverUrl}/api/uniforms`)
  .then(resp => {
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialUniforms={resp.data.uniforms} />
      ),
      initialData: resp.data
    }; 
      //console.log(resp.data);
  });
  export default serverRender;