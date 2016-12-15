import React, {Component} from 'react';

class Uniform extends Component {
  handleClick = () => {
    console.log(this.props.uniformName);
  }
  render() {
    return (
     <div className="link Uniform" onClick={this.handleClick}>
        <div className="uniform-name">
          {this.props.uniformName}
        </div>
        <div className="uniform-info">
          {this.props.uniformInfo}
        </div>
      </div>
    );
  }
}
Uniform.propTypes = {
  uniformName: React.PropTypes.string.isRequired,
  uniformInfo: React.PropTypes.string.isRequired
};
 
export default Uniform;