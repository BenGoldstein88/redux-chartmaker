
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

export const addSection = (numMeasures = 0, name = 'Chorus', duplicate = false, sectionId = -1) => {
	return {
		type: 'ADD_SECTION',
		id: nextSectionId++,
		numMeasures,
		name,
		duplicate,
		sectionId
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

export const markBeatAsClicked = (sectionId, measureIndex, id) => {
	return {
		type: 'MARK_BEAT_AS_CLICKED',
		sectionId,
		measureIndex,
		id
	}
}

export const setChord = (chord, sectionId, measureIndex, id) => {
	return {
		type: 'SET_CHORD',
		chord,
		sectionId,
		measureIndex,
		id
	}
}

export const setSectionName = (name, sectionId) => {
	return {
		type: 'SET_SECTION_NAME',
		name,
		sectionId
	}
}

export const markSectionAsClicked = (sectionId) => {
	return {
		type: 'MARK_SECTION_AS_CLICKED',
		sectionId
	}
}

export const moveSectionUp = (sectionId) => {
	return {
		type: 'MOVE_SECTION_UP',
		sectionId
	}
}

export const moveSectionDown = (sectionId) => {
	return {
		type: 'MOVE_SECTION_DOWN',
		sectionId
	}
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setCurrentKey = (key) => ({
	type: 'SET_CURRENT_KEY',
	key
})

export const setChordDisplay = (display) => ({
	type: 'SET_CHORD_DISPLAY',
	display
})

export const transposeAllChords = (oldKey, newKey) => ({
	type: 'TRANSPOSE_ALL_CHORDS',
	oldKey,
	newKey
})

export const setTitle = (title) => ({
	type: 'SET_TITLE',
	title
})

export const setComposer = (composer) => ({
	type: 'SET_COMPOSER',
	composer
})

export const setArranger = (arranger) => ({
	type: 'SET_ARRANGER',
	arranger
})

export const markChartInfoAsClicked = (chartInfo) => ({
	type: 'MARK_CHART_INFO_AS_CLICKED',
	chartInfo
})

export const markMultiplierAsClicked = (sectionId) => ({
	type: 'MARK_MULTIPLIER_AS_CLICKED',
	sectionId
})

export const setMultiplier = (sectionId, multiplier) => ({
	type: "SET_MULTIPLIER",
	sectionId,
	multiplier
})

