import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Error404 } from './components/Error404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list-shaders" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add-shader" component={App} />
		<Route path="*" component={Error404}/>
	</Router>,
	document.getElementById('react-container')
)

