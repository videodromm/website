import React from 'react';

const Uniform = (uniform) => (
  <div className="Uniform">
    <div className="uniform-name">
      {uniform.uniformName}
    </div>
    <div className="uniform-info">
      {uniform.uniformInfo}
    </div>
  </div>
);
 
export default Uniform;