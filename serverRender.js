import React from 'react';

import config from './config';
import axios from 'axios';

// fetch data from the api
axios.get(`${config.serverUrl}/api/uniforms`)
  .then(resp => {
      console.log(resp.data);
  });