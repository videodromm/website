import Valid from 'react-icons/lib/go/check'
import Active from 'react-icons/lib/go/light-bulb'
import { PropTypes } from 'react'

export const ShaderRow = ({shader, file, date, 
							valid, active}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{shader}
		</td>
		<td>
			{file}
		</td>
		<td>
			{(valid) ? <Valid/> : null}
		</td>
		<td>
			{(active) ? <Active /> : null}
		</td>
	</tr>						

)

ShaderRow.propTypes = {
	shader: PropTypes.string.isRequired,
	file: PropTypes.string.isRequired,
	date: PropTypes.string,
	valid: PropTypes.bool,
	active: PropTypes.bool
}


