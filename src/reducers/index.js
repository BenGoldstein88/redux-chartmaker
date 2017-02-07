import { combineReducers } from 'redux';
import sections from './sections';
import visibilityFilter from './visibilityFilter';
import currentKey from './currentKey'
import chordDisplay from './chordDisplay'
import title from './title';
import arranger from './arranger';
import composer from './composer';

const chartMakerApp = combineReducers({
	sections,
	visibilityFilter,
	currentKey,
	chordDisplay,
	title,
	arranger,
	composer
})

export default chartMakerApp