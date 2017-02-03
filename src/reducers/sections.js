// import { combineReducers } from 'redux';
// import { ADD_SECTION, REMOVE_SECTION } from '../actions'

// const section = (state = {}, action) => {
// 	switch(action.type) {
// 		case 'ADD_SECTION':
// 			return {
// 				id: action.id,
// 				name: action.name,
// 				numMeasures: action.numMeasures,
// 				clicked: false
// 			}
// 		case 'REMOVE_SECTION':
// 			return null
// 		default:
// 			return state
// 	}
// }




function sections(state = [], action) {
	switch(action.type) {
		case 'ADD_SECTION':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					numMeasures: action.numMeasures,
					clicked: false					
				}
			]
		case 'REMOVE_SECTION':
			const clone = state.map((section, index) => {
				if(section.id === action.id || section === null) {
					return null
				}
				return section
				// section !== null && section.id !== action.id ? return section
			})
			const cleanClone = clone.filter(function(ele) { return ele !== null })
			return cleanClone;
		default:
			return state
	}
}

export default sections

// const chartMakerApp = combineReducers({
// 	sections
// })

// export default chartMakerApp

// const chart = (state = {}, action) => {
// 	switch(action.type) {
// 		case 'ADD_SECTION':
// 			return false
// 		case 'REMOVE_SECTION':
// 			return false
// 		case 'RENAME_SECTION':
// 			return false
// 		case 'ADD_MEASURE':
// 			return false
// 		case 'REMOVE_MEASURE':
// 			return false
// 		case 'EDIT_BEAT':
// 			return false

// 		default:
// 			return state
// 	}
// }

// const charts = {state = [], action} => {
// 	switch(action.type)
// }

