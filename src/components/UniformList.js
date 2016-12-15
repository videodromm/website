import React from 'react';
import Uniform from './Uniform';

const UniformList = ({uniforms, onUniformClick}) => (
  <div className="UniformList">
    {Object.keys(uniforms).map(uniformId => 
        <Uniform 
        key={uniformId} 
        onClick={onUniformClick}
        {...uniforms[uniformId]} />
    )} 
  </div>
);

UniformList.propTypes = {
  uniforms: React.PropTypes.object,
  onUniformClick: React.PropTypes.func.isRequired
};

export default UniformList;
