import { combineReducers } from 'redux';
import sections from './sections';
import visibilityFilter from './visibilityFilter';
import currentKey from './currentKey'
import chordDisplay from './chordDisplay'

const chartMakerApp = combineReducers({
	sections,
	visibilityFilter,
	currentKey,
	chordDisplay
})

export default chartMakerApp