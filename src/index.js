import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import SignupPage from './components/signup/SignupPage';
import { Controller } from './components/Controller'
import { Warps } from './components/Warps'
import { Github } from './components/Github'
import { Links } from './components/Links'
import { Credits } from './components/Credits'
import { Error404 } from './components/Error404'
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
window.React = React

render(
	<Provider store={store}>
		<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list-shaders" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="controller" component={Controller} />
		<Route path="add-shader" component={App} />
		<Route path="github" component={Github} />
		<Route path="warps" component={Warps} />
		<Route path="links" component={Links} />
		<Route path="credits" component={Credits} />
		<Route path="signup" component={SignupPage} />
		<Route path="*" component={Error404}/>
	</Router>
  </Provider>, document.getElementById('react-container')
)

