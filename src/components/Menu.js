import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddShaderIcon from 'react-icons/lib/go/diff-added'
import ListShadersIcon from 'react-icons/lib/fa/table'
import GithubIcon from 'react-icons/lib/go/mark-github'
import EyeIcon from 'react-icons/lib/go/eye'
import KeyboardIcon from 'react-icons/lib/fa/keyboard-o'
import LynxIcon from 'react-icons/lib/go/link-external'

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
	</nav>