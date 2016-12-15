import React from 'react';
import ReactDOM from 'react-dom';

import data from './data/uniforms.json';
import App from './components/App';

ReactDOM.render(
    <App uniforms={data.uniforms} />, 
    document.getElementById('root')
);
