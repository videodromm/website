import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddShaderIcon from 'react-icons/lib/go/diff-added'
import ListShadersIcon from 'react-icons/lib/fa/table'
import GithubIcon from 'react-icons/lib/go/mark-github'
import EyeIcon from 'react-icons/lib/go/eye'
import KeyboardIcon from 'react-icons/lib/fa/keyboard-o'
import LynxIcon from 'react-icons/lib/go/link-external'
import SignupIcon from 'react-icons/lib/fa/sign-in'
import WarpIcon from 'react-icons/lib/ti/arrow-move-outline'
import CreditsIcon from 'react-icons/lib/ti/group-outline'

export const Menu = () => 
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<HomeIcon />
		</Link>
		<Link to="/add-shader" activeClassName="selected">
			<AddShaderIcon />
		</Link>
		<Link to="/list-shaders" activeClassName="selected">
			<ListShadersIcon />
		</Link>
		<Link to="/warps" activeClassName="selected">
			<WarpIcon />
		</Link>
		<Link to="/github" activeClassName="selected">
			<GithubIcon />
		</Link>
		<Link to="/glslcanvas" activeClassName="selected">
			<EyeIcon />
		</Link>
		<Link to="/glsleditor" activeClassName="selected">
			<KeyboardIcon />
		</Link>
		<Link to="/links" activeClassName="selected">
			<LynxIcon />
		</Link>
		<Link to="/credits" activeClassName="selected">
			<CreditsIcon />
		</Link>
		<Link to="/signup" activeClassName="selected">
			<SignupIcon />
		</Link>
	</nav>