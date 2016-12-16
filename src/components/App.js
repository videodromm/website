import React from 'react';
import Header from './Header';
import UniformList from './UniformList';
import Uniform from './Uniform';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = this.props.initialData;
  componentDidMount() {
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
      return <Uniform {...this.currentUniform} />;
    }
    return <UniformList 
          onUniformClick={this.fetchUniform}
          uniforms={this.state.uniforms} />
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