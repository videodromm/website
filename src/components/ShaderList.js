import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { ShaderRow } from './ShaderRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const ShaderList = ({shaders, filter}) => {
  const filteredShaders = (!filter || 
  		!filter.match(/powder|backcountry/))?
  		shaders:
  		shaders.filter(shader => shader[filter])

  return (
  	<div className="ski-shader-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="/list-shaders">
						All Shaders
					</Link>
					<Link to="/list-shaders/powder">
						Powder Shaders
					</Link>
					<Link to="/list-shaders/backcountry">
						Backcountry Shaders
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













