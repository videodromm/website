import { PropTypes, Component } from 'react'

const Shaders = [
	"AudioReaktive",
	"AnyArrayIndex"
]

class Autocomplete extends Component {
	
	get value() {
		return this.refs.inputShader.value
	}

	set value(inputValue) {
		this.refs.inputShader.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputShader"
					   type="text" 
					   list="shada" />
				<datalist id="shada">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const AddShaderForm = ({ shader, 
							 date, 
							 valid, 
							 active,
							 onNewShader }) => {
	
	let _shader, _date, _valid, _active
	
	const submit = (e) => {
		e.preventDefault()
		onNewShader({
			shader: _shader.value,
			date: _date.value,
			valid: _valid.checked,
			active: _active.checked
		})
		_shader.value = ''
		_date.value = ''
		_valid.checked = false
		_active.checked = false

	}

	return (
		<form onSubmit={submit} className="add-shader-form">

			<label htmlFor="shader">Shader Name</label>
			<Autocomplete options={Shaders}
				   		  ref={input => _shader = input}/>

			<label htmlFor="date">Date</label>
			<input id="date" 
				   type="date" 
				   required 
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input id="valid" 
					   type="checkbox" 
					   defaultChecked={valid}	
					   ref="valid"
					   ref={input => _valid = input}/>
				<label htmlFor="valid">Valid Shader</label>
			</div>

			<div>	
				<input id="active" 
					   type="checkbox"
					   defaultChecked={active} 
					   ref="active"
					   ref={input => _active = input}/>
				<label htmlFor="active">
					Active Shader
				</label>
			</div>
			<button>Add Shader</button>
		</form>
	)
}

AddShaderForm.defaultProps = {
	shader: "Kirkwood",
	date: "2017-02-12",
	valid: true,
	active: false
}


AddShaderForm.propTypes = {
	shader: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	valid: PropTypes.bool.isRequired,
	active: PropTypes.bool.isRequired
}