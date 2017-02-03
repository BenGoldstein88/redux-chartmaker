function measures(state = [], action) {
	switch(action.type) {
		case 'ADD_MEASURE':
			console.log("state: ", state);
			const clone = state.map((section, index) => {
				console.log("action: ", action);
				console.log("section: ", section);
				if(action.sectionId === section.id) {
					const sectionClone = {
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
			return clone;
		case 'REMOVE_MEASURE':
			// const clone = state.map((measure, index) => {
			// 	if(measure.id === action.id || measure === null) {
			// 		return null
			// 	}
			// 	return measure
			// })
			// const cleanClone = clone.filter(function(ele) { return ele !== null })
			// return cleanClone;
			return state;
		default:
			return state
	}
}

export default measures