import React from 'react';
import Header from './Header';
import Uniform from './Uniform';
import data from '../data/uniforms';

class App extends React.Component {
  state = { 
    pageHeader: 'Titre',
    uniforms: []
  };
  componentDidMount() {
    this.setState({
      uniforms: data.uniforms
    });
  };
  render() {
    return (
    <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.uniforms.map(uniform => 
            <Uniform key={uniform.id} {...uniform} />
          )}
        </div>
    </div>
    );
  }
}

export default App;