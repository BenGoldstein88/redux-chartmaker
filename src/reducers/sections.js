function sections(state = [], action) {
	switch(action.type) {
		case 'ADD_SECTION':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					numMeasures: action.numMeasures,
					measures: [],
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
							index: section.measures.length,
							sectionId: action.sectionId,
							numBeats: action.numBeats,
							beats: [{chord: "", clicked: false, id: 0, sectionId: action.sectionId, measureId: action.id, measureIndex: action.id}, {chord: "", clicked: false, id: 1, sectionId: action.sectionId, measureId: action.id, measureIndex: action.id}, {chord: "", clicked: false, id: 2, sectionId: action.sectionId, measureId: action.id, measureIndex: action.id}, {chord: "", clicked: false, id: 3, sectionId: action.sectionId, measureId: action.id, measureIndex: action.id}],
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
					var cleanMeasuresClone = measuresClone.filter(function(ele) { return ele !== null })
					cleanMeasuresClone = cleanMeasuresClone.map(function(measure, index) {
						return {
							id: measure.id,
							index: index,
							sectionId: measure.sectionId,
							numBeats: measure.numBeats,
							beats: measure.beats,
							clicked: measure.clicked
						}
					})

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
			return newMeasures
		case 'MARK_BEAT_AS_CLICKED':

			console.log("action: ", action);
			var updatedSections = []
			for(var i in state) {
				var currentSection = state[i]

				var currentMeasures = []
				for(var j in currentSection.measures) {
					var currentMeasure = currentSection.measures[j]

					var currentBeats = []
					for(var k in currentMeasure.beats) {
						var currentBeat = currentMeasure.beats[k]

						if(currentBeat.id === action.id && currentBeat.measureIndex === action.measureIndex && currentBeat.sectionId === action.sectionId) {
							var currentBeatClone = {
								id: currentBeat.id,
								measureIndex: currentMeasure.index,
								sectionId: currentBeat.sectionId,
								chord: currentBeat.chord,
								clicked: !currentBeat.clicked
							}
						} else {
							var currentBeatClone = {
								id: currentBeat.id,
								measureIndex: currentMeasure.index,
								sectionId: currentBeat.sectionId,
								chord: currentBeat.chord,
								clicked: false
							}
						}
						currentBeats.push(currentBeatClone)
					}
					var currentMeasureClone = {
						id: currentMeasure.id,
						index: currentMeasure.index,
						sectionId: currentMeasure.sectionId,
						numBeats: currentMeasure.numBeats,
						clicked: currentMeasure.clicked,
						beats: currentBeats
					}
					currentMeasures.push(currentMeasureClone)

				}

				var currentSectionClone = {
					id: currentSection.id,
					name: currentSection.name,
					numMeasures: currentSection.numMeasures,
					clicked: currentSection.clicked,
					measures: currentMeasures
				}
				updatedSections.push(currentSectionClone)
			}
			return updatedSections

		default:
			return state
	}
}

export default sections


