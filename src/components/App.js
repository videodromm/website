import React from 'react';
import Header from './Header';
import UniformList from './UniformList';
//import axios from 'axios';

class App extends React.Component {
  state = { 
    pageHeader: 'Titre',
    uniforms: this.props.initialUniforms
  };
  componentDidMount() {
    // ajax req
    /*axios.get('/api/uniforms')
      .then(resp => {
        this.setState({
          uniforms: resp.data.uniforms
        });
      })
      .catch(console.error)*/
    
  }
  render() {
    return (
    <div className="App">
        <Header message={this.state.pageHeader} />
        <UniformList uniforms={this.state.uniforms} />
    </div>
    );
  }
}

export default App;