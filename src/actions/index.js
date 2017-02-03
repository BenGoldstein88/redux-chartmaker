
// action types
export const ADD_SECTION = 'ADD_SECTION';
export const REMOVE_SECTION = 'REMOVE_SECTION';

// action creators

// let nextSectionId = 0

// export function addSection(numMeasures = 8, name = 'Chorus') {
// 	return {
// 		type: 'ADD_SECTION',
// 		id: nextSectionId, 
// 		numMeasures,
// 		name 
// 	}
// }

// export function removeSection(index) {
// 	return { type: 'REMOVE_SECTION', index}
// }

let nextSectionId = 0

export const addSection = (numMeasures = 8, name = 'Chorus') => {
	return {
		type: 'ADD_SECTION',
		id: nextSectionId++,
		numMeasures,
		name
	}
}

export const removeSection = (id) => {
	return {
		type: 'REMOVE_SECTION',
		id
	}
}