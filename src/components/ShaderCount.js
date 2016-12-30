import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const ShaderCount = ({total=70, valid=20, 
							active=10, goal=100}) => (
		<div className="ski-shader-count">
			<div className="total-shaders">
				<span>{total}</span>
					<Calendar />
				<span>shaders</span>
			</div>
			<div className="valid-shaders">
				<span>{valid}</span>
					<SnowFlake />
				<span>shaders</span>
			</div>
			<div className="active-shaders">
				<span>{active}</span>
					<Terrain />
				<span>shaders</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)

ShaderCount.propTypes = {
  total: PropTypes.number,
  valid: PropTypes.number,
  active: PropTypes.number,
  goal: PropTypes.number
}


