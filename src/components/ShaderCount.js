import '../stylesheets/ui.scss'
import Total from 'react-icons/lib/go/dashboard'
import Valid from 'react-icons/lib/go/check'
import Active from 'react-icons/lib/go/light-bulb'
import { PropTypes } from 'react'

export const ShaderCount = ({total=0, valid=0, 
							active=0}) => (
		<div className="shader-count">
			<div className="total-shaders">
				<span>{total}</span>
					<Total />
				<span>shaders</span>
			</div>
			<div className="valid-shaders">
				<span>{valid}</span>
					<Valid />
				<span>shaders</span>
			</div>
			<div className="active-shaders">
				<span>{active}</span>
					<Active />
				<span>shaders</span>
			</div>
		</div>
)

ShaderCount.propTypes = {
  total: PropTypes.number,
  valid: PropTypes.number,
  active: PropTypes.number,
  goal: PropTypes.number
}


