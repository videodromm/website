import React, {Component} from 'react';

class ShaderPreview extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  }
  render() {
    return (
     <div className="link Shader" onClick={this.handleClick}>
        <div className="shader-name">
          {this.props.shaderName}
        </div>
        <div className="shader-info">
          {this.props.shaderInfo}
        </div>
      </div>
    );
  }
}
ShaderPreview.propTypes = {
  id: React.PropTypes.number.isRequired,
  shaderName: React.PropTypes.string.isRequired,
  shaderInfo: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};
 
export default ShaderPreview;