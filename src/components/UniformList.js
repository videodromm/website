import React from 'react';
import UniformPreview from './UniformPreview';

const UniformList = ({uniforms, onUniformClick}) => (
  <div className="UniformList">
    {Object.keys(uniforms).map(uniformId => 
        <UniformPreview 
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
