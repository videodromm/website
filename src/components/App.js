import React from 'react';
import Header from './Header';
import UniformList from './UniformList';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = { 
    pageHeader: 'Titre',
    uniforms: this.props.initialUniforms
  };
  componentDidMount() {
  }
  fetchUniform = (uniformId) => {
    pushState(
      { currentUniform: uniformId },
      `/uniform/${uniformId}`
    );
    // now the array is reduced as an object we can lookup by id
    this.setState({
      pageHeader: this.state.uniforms[uniformId].uniformName
    });
  }
  render() {
    return (
    <div className="App">
        <Header message={this.state.pageHeader} />
        <UniformList 
          onUniformClick={this.fetchUniform}
          uniforms={this.state.uniforms} />
    </div>
    );
  }
}

export default App;