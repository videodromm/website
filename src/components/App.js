import React from 'react';
import Header from './Header';
import ShaderList from './ShaderList';
import Shader from './Shader';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };
  state = this.props.initialData;
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentShaderId: (event.state || {}).currentShaderId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }
  fetchShader = (shaderId) => {
    pushState(
      { currentShader: shaderId },
      `/shader/${shaderId}`
    );
    api.fetchShader(shaderId).then(shader => {
      // now the array is reduced as an object we can lookup by id
      this.setState({
        currentShaderId: shader.id,
        shaders: {
          ...this.state.shaders,
          [shader.id]:shader
        }
      });
    }); 
  }
  fetchShaderList = () => {
    pushState(
      { currentShader: null },
      `/`
    );
    api.fetchShaderList().then(shaders => {
      // now the array is reduced as an object we can lookup by id
      this.setState({
        currentShaderId: null,
        shaders
      });
    }); 
  }

  currentShader() {
    return this.state.shaders[this.state.currentShaderId];
  }
  pageHeader() {
    if (this.state.currentShaderId) {
      return this.currentShader().shaderName;
    }
    return 'Titre';
  }
  currentContent() {
    if (this.state.currentShaderId) {
      return <Shader 
              shaderListClick={this.fetchShaderList}
              {...this.currentShader} />;
    }
    return <ShaderList 
          onShaderClick={this.fetchShader}
          shaders={this.state.shaders} />;
  };
  render() {
    return (
    <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
    </div>
    );
  }
}

export default App;