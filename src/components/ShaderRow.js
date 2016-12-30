import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const ShaderRow = ({shader, date, 
							valid, active}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{shader}
		</td>
		<td>
			{(valid) ? <SnowFlake/> : null}
		</td>
		<td>
			{(active) ? <Terrain /> : null}
		</td>
	</tr>						

)

ShaderRow.propTypes = {
	shader: PropTypes.string.isRequired,
	date: PropTypes.string,
	valid: PropTypes.bool,
	active: PropTypes.bool
}


