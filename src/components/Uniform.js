import React, {Component} from 'react';

class Uniform extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
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
  id: React.PropTypes.number.isRequired,
  uniformName: React.PropTypes.string.isRequired,
  uniformInfo: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};
 
export default Uniform;