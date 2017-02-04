import { combineReducers } from 'redux';
import sections from './sections';
import visibilityFilter from './visibilityFilter';

const chartMakerApp = combineReducers({
	sections,
	visibilityFilter
})

export default chartMakerApp