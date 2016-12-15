import React from 'react';
import Header from './Header';
import Uniform from './Uniform';

class App extends React.Component {
  state = { 
    pageHeader: 'Titre'
  };
  componentDidMount() {
    console.log(this.props.uniforms[0].uniformInfo);
  };
  render() {
    return (
    <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.uniforms.map(uniform => 
            <Uniform key={uniform.id} {...uniform} />
          )}
        </div>
    </div>
    );
  }
}

export default App;