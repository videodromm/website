import React from 'react';
import ShaderPreview from './ShaderPreview';

const ShaderList = ({shaders, onShaderClick}) => (
  <div className="ShaderList">
    {Object.keys(shaders).map(shaderId => 
        <ShaderPreview 
        key={shaderId} 
        onClick={onShaderClick}
        {...shaders[shaderId]} />
    )} 
  </div>
);

ShaderList.propTypes = {
  shaders: React.PropTypes.object,
  onShaderClick: React.PropTypes.func.isRequired
};

export default ShaderList;
