import React, {Component, PropTypes} from 'react';

class Uniform extends Component {
  render() {
    return (
      <div className="Uniform">
        <div className="uniform-description">
          {this.props.description}
        </div>
        <div className="home-link link"
             onClick={this.props.uniformListClick}>
          Uniform list
        </div>
      </div>
    );
  }
}
Uniform.propTypes = {
  description: PropTypes.string.isRequired,
  uniformListClick: PropTypes.func.isRequired
};
 
export default Uniform;