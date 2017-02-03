import { combineReducers } from 'redux';
import sections from './sections';
import measures from './measures'

const chartMakerApp = combineReducers({
	sections
})

export default chartMakerApp