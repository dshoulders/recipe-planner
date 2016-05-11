import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import reducers from './reducers'
import App from './containers/App'
import Calendar from './containers/Calendar'
import Recipes from './containers/Recipes'
import Tags from './containers/Tags'
import Days from './containers/Days'
import { autoSave } from './utils'


const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware // lets us dispatch() functions
	)
)

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path={'/'} component={App}>
				<IndexRoute component={Calendar}/>
				<Route path="recipes" component={Recipes}/>
				<Route path="tags" component={Tags}/>
				<Route path="days" component={Days}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)