import React, {Component, PropTypes} from 'react';

class Shader extends Component {
  render() {
    return (
      <div className="Shader">
        <div className="shader-description">
          {this.props.description}
        </div>
        <div className="home-link link"
             onClick={this.props.shaderListClick}>
          Shader list
        </div>
      </div>
    );
  }
}
Shader.propTypes = {
  description: PropTypes.string.isRequired,
  shaderListClick: PropTypes.func.isRequired
};
 
export default Shader;