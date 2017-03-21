import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ItemList from './ui/ItemList';
import Item from './ui/Item';

class App extends Component {
  state = {
    wshost:'127.0.0.1',
    wsport:8088
  };
  submit = (e) => {
    e.preventDefault();
    window.socket = new WebSocket('ws://' + this.state.wshost + ':' + this.state.wsport);
  };
  onClick() {
    console.log('click');
    window.socket = new WebSocket('ws://' + this.state.wshost + ':' + this.state.wsport);
    window.socket.send('{"params" :[{"name" : 12,"value" :0.7}]}');
  }
  changeHost(event, value) {
    this.setState({wshost: value});
  }
  changePort(event, value) {
    this.setState({wsport: value});
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="container">
            <div className="row">
                <div className="col s12 m7"><Item /></div>
                <div className="col s12 m5">
                  <form onSubmit={this.submit}>
                    <div className='form-group'>
                      <label htmlFor="host">Host</label>
                      <input id="host" 
                        type="text" 
                        required 
                        defaultValue={this.state.wshost}
                        onChange={this.changeHost}
                      />
                    </div>                  
                    <div className='form-group'>
                      <label htmlFor="port">Port</label>
                      <input id="port" 
                        type="number" 
                        required 
                        defaultValue={this.state.wsport}
                        onChange={this.changePort}
                      />
                    </div> 
                    <div className="form-group">
                      <button className="btn">Connect</button>
                    </div>
                  </form>
                </div>
                <div className="col s12 m5"><ItemList /></div>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
