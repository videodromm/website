import { ShaderRow } from './ShaderRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const ShaderList = ({shaders, filter}) => {
  const filteredShaders = (!filter || 
  		!filter.match(/valid|active/))?
  		shaders:
  		shaders.filter(shader => shader[filter])

  return (
  	<div className="shader-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Name</th>
				<th>Valid</th>
				<th>Active</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="/list-shaders">
						All Shaders
					</Link>
					<Link to="/list-shaders/valid">
						Valid Shaders
					</Link>
					<Link to="/list-shaders/active">
						Active Shaders
					</Link>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredShaders.map((shader, i) =>
				<ShaderRow key={i}
						   {...shader}/>	
				)}
		</tbody>

	</table>
	</div>
)
}  

ShaderList.propTypes = {
	shaders: function(props) {
		if(!Array.isArray(props.shaders)) {
			return new Error(
				"ShaderList should be an array"	
				)
		} else if(!props.shaders.length) {
			return new Error(
				"ShaderList must have at least one record"
				)
		} else {
			return null
		}
	}
}













