import React from 'react'
import Period from '../containers/Period'
import MainNav from './MainNav'
import { fetchData } from '../actions'
import '../css/app.css'

const App = ({ dispatch, haveData, children }) => {
	
	if(!haveData) {
		dispatch(fetchData())
	}
	
	return (
		<div className={'app'}>
			<MainNav />
			{children}			
		</div>
	)
}

export default App