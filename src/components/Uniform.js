import React, {Component, PropTypes} from 'react';

class Uniform extends Component {
  render() {
    return (
      <div className="Uniform">
        {this.props.description}
      </div>
    );
  }
}
Uniform.propTypes = {
  description: PropTypes.string.isRequired
};
 
export default Uniform;