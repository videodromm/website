import React from 'react';
import Header from './Header';
import Uniform from './Uniform';
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