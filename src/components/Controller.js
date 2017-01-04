import { Component } from 'react'
import { Menu } from './Menu'
import UniformList from './UniformList';
export class Controller extends Component{
	constructor(props) {
		super(props)
		this.state = {
			item: {
				uniformName: "iZoom",
				uniformValue: 1.0,
				uniformInfo: "iZoom", 
        widget: "dial",
        uniformMinValue: 0.0, 
        uniformMaxValue: 1.0
			},
      index:0
		}
		this.changeUniform = this.changeUniform.bind(this)
		this.resetUniform = this.resetUniform.bind(this)
        //nx;
    console.log('nx' + nx);

    nx.onload = function(){
      console.log('nx onload'+ ws);
      nx.colorize("#220022");
      nx.colorize("border", "#BBAAFF");
      nx.colorize("fill", "#BBAAFF");
      for (var key in nx.widgets) {
        nx.widgets[key].on('*', function(data) {
          var d = document.getElementById("tester");
          d.innerHTML = key + " " + data.value;
          window.socket.send('{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
        })
      };

      //iZoom.animate("bounce"); 
      iZoom.on('*', function(data){
        console.log('iZoom ' + ws + ' val:' + data.value);
        window.socket.emit('params', '{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
        //ws.send('{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
       });
       /*iExposure.on('*', function(data){
         console.log('iExposure'+ ws + ' val:' + data.value);
         //ws.send('{"params" :[{"name" : 14,"value" :'+data.value+"}]}");
       });
       iRedMultiplier.on('*', function(data){
         console.log('iRedMultiplier'+ ws + ' val:' + data.value);
         //ws.send('{"params" :[{"name" : 5,"value" :'+data.value+"}]}");
       });
       iGreenMultiplier.on('*', function(data){
          console.log('iGreenMultiplier'+ ws + ' val:' + data.value);
          //ws.send('{"params" :[{"name" : 6,"value" :'+data.value+"}]}");
        });
        iBlueMultiplier.on('*', function(data){
          console.log('iBlueMultiplier'+ ws + ' val:' + data.value);
          //ws.send('{"params" :[{"name" : 7,"value" :'+data.value+"}]}");
        });
        iColor.on('*', function(data) {
          console.log('iColor:' + data.value);
          //ws.send('{"params" :[{"name" : 1,"value" :'+data.value+"}]}");
        });*/
   };

    /*this.serverRequest = $.get('./js/uniforms.json', function(result) {
      var tempUniforms = result;
      this.setState({
        uniforms: tempUniforms
      }); //setState
    }.bind(this));*/
	}

	resetUniform(item) {
    console.log('resetUniform:' + item.uniformName + ' was ' + item.uniformValue);
    item.uniformValue = item.defaultValue;
    var allUniformList = this.state.uniforms;
    console.log('reset to:' + item.uniformValue);
    this.setState({
        uniforms: allUniformList
      }); //setState
	}
	changeUniform(item, value) {
    console.log('changeUniform:' + item.uniformName + ' was ' + item.uniformValue + ' to ' + value);
    if(item.uniformValue !== value) {
      item.uniformValue = value;
      var allUniformList = this.state.uniforms;
      console.log('changed to:' + item.uniformValue);
      this.setState({
        uniforms: allUniformList
      }); //setState
    } //if
	} //changeUniform

  render() {
		return (
      <div className="interface">
        <Menu />
        <UniformList key = {this.state.index}
          singleItem = {this.state.item}
          whichUniform = {this.state.item}
          onChange = {this.changeUniform}
          onReset = {this.resetUniform} />
      </div>
    ) //return
  } //render
} //Controller



