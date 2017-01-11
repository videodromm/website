import { Component } from 'react'
import { ShaderList } from './ShaderList'
import { ShaderCount } from './ShaderCount'
import { AddShaderForm } from './AddShaderForm'
import { Menu } from './Menu'
import data from '../shaders.json'
console.log(data)

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shaders: []
		}
		this.addShader = this.addShader.bind(this)
	}
	componentDidMount() {
		this.setState({
			shaders: data.shaders
		})
	}
	addShader(newShader) {
		this.setState({
			shaders: [
				...this.state.shaders,
				newShader
			]
		})
	}

	countShaders(filter) {
		const { shaders } = this.state
		return shaders.filter(
			(shader) => (filter) ? shader[filter] : shader).length
	}

	render() {
		return (
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ?
			  <ShaderCount total={this.countShaders()}
							 valid={this.countShaders(
							 		"valid"
							 	)}
							 active={this.countShaders(
							 		"active"
							 	)}/> :
			 (this.props.location.pathname === "/add-shader") ?
			 	<AddShaderForm onNewShader={this.addShader}/> :
			 	<ShaderList shaders={this.state.shaders}
			 				filter={this.props.params.filter}/>				 
			}
					
			</div>
		)
	}
}




