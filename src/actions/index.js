
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
let nextMeasureId = 0

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

export const addMeasure = (sectionId, numBeats = 4) => {
	return {
		type: 'ADD_MEASURE',
		id: nextMeasureId++,
		sectionId,
		numBeats
	}
}

export const removeMeasure = (sectionId, id) => {
	return {
		type: 'REMOVE_MEASURE',
		sectionId,
		id

	}
}