function sections(state = [], action) {
	switch(action.type) {
		case 'ADD_SECTION':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					numMeasures: action.numMeasures,
					measures: new Array(8),
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
		case 'ADD_MEASURE':
			const measures = state.map((section, index) => {
				if(action.sectionId === section.id) {
					let sectionClone = {
						id: section.id,
						name: section.name,
						numMeasures: section.numMeasures+1,
						measures: section.measures.concat([{
							id: action.id,
							sectionId: action.sectionId,
							numBeats: action.numBeats,
							beats: new Array(4),
							clicked: false
						}]),
						clicked: false							
					}
					return sectionClone
				}
				return section
			})
			return measures;
		case 'REMOVE_MEASURE':
			const newMeasures = state.map((section, index) => {
				if(action.sectionId === section.id) {
					const measuresClone = section.measures.map(function(measure) {
						if(action.id === measure.id) {
							return null
						}
						return measure
					})
					const cleanMeasuresClone = measuresClone.filter(function(ele) { return ele !== null })
					let sectionClone = {
						id: section.id,
						name: section.name,
						numMeasures: section.numMeasures+1,
						measures: cleanMeasuresClone,
						clicked: section.clicked							
					}
					return sectionClone
				}
				return section
			})
			return newMeasures;
		default:
			return state
	}
}

export default sections


