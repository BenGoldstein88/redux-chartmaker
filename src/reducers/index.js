import { combineReducers } from 'redux';
import sections from './sections';
import visibilityFilter from './visibilityFilter';
import currentKey from './currentKey'
import chordDisplay from './chordDisplay'
import title from './title';
import arranger from './arranger';
import composer from './composer';
import chartInfo from './chartInfo';

const chartMakerApp = combineReducers({
	sections,
	visibilityFilter,
	currentKey,
	chordDisplay,
	title,
	arranger,
	composer,
	chartInfo
})

export default chartMakerApp