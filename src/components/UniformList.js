import React from 'react';
import Uniform from './Uniform';

const UniformList = ({uniforms}) => (
  <div className="UniformList">
    {uniforms.map(uniform => 
        <Uniform key={uniform.id} {...uniform} />
    )} 
  </div>
);

UniformList.propTypes = {
  uniforms: React.PropTypes.array
};

export default UniformList;
