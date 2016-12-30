import { Component } from 'react'
import { ShaderList } from './ShaderList'
import { ShaderCount } from './ShaderCount'
import { AddShaderForm } from './AddShaderForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allShaders: [
			{
				shader: "HexlerEye",
				date: "2016-01-02",
				valid: true,
				active: true
			}
		]
		}
		this.addShader = this.addShader.bind(this)
	}

	addShader(newShader) {
		this.setState({
			allShaders: [
				...this.state.allShaders,
				newShader
			]
		})
	}

	countShaders(filter) {
		const { allShaders } = this.state
		return allShaders.filter(
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
			 	<ShaderList shaders={this.state.allShaders}
			 				filter={this.props.params.filter}/>				 
			}
					
			</div>
		)
	}
}




