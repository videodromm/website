import React from 'react';
import Header from './Header';
import UniformList from './UniformList';
import Uniform from './Uniform';
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
        currentUniformId: (event.state || {}).currentUniformId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }
  fetchUniform = (uniformId) => {
    pushState(
      { currentUniform: uniformId },
      `/uniform/${uniformId}`
    );
    api.fetchUniform(uniformId).then(uniform => {
      // now the array is reduced as an object we can lookup by id
      this.setState({
        currentUniformId: uniform.id,
        uniforms: {
          ...this.state.uniforms,
          [uniform.id]:uniform
        }
      });
    }); 
  }
  fetchUniformList = () => {
    pushState(
      { currentUniform: null },
      `/`
    );
    api.fetchUniformList().then(uniforms => {
      // now the array is reduced as an object we can lookup by id
      this.setState({
        currentUniformId: null,
        uniforms
      });
    }); 
  }

  currentUniform() {
    return this.state.uniforms[this.state.currentUniformId];
  }
  pageHeader() {
    if (this.state.currentUniformId) {
      return this.currentUniform().uniformName;
    }
    return 'Titre';
  }
  currentContent() {
    if (this.state.currentUniformId) {
      return <Uniform 
              uniformListClick={this.fetchUniformList}
              {...this.currentUniform} />;
    }
    return <UniformList 
          onUniformClick={this.fetchUniform}
          uniforms={this.state.uniforms} />;
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