import { combineReducers } from 'redux'
import days from './days'
import periods from './periods'
import recipes from './recipes'
import tags from './tags'
import ui from './ui'
import haveData from './haveData'
import simpleAuth from './simpleAuth'
import nextId from './nextId'

export default combineReducers({
	days,
	periods,
	recipes,
	tags,
	ui,
	haveData,
	simpleAuth,
	nextId
})