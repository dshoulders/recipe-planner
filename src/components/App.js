import React from 'react'
import MainNav from './MainNav'
import SimpleAuth from '../containers/SimpleAuth'
import '../css/app.css'

const App = ({ isAuthenticated, dataToSave, haveData, needToSave, children, sendAuthCheck, attemptGetData, attemptSave }) => {
	
	if(isAuthenticated === null) {
		sendAuthCheck()
	}	
	
	if(!haveData) {
		attemptGetData()
	}	
	
	if(needToSave) {
		attemptSave(dataToSave)
	}
	
	return (
		<div className={'app'}>
			<div className={'header'}>
				<MainNav />
				<SimpleAuth />
			</div>
			{children}			
		</div>
	)
}

export default App