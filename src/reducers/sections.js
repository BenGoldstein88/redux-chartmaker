
// function section(state = {}, action) {
// 	switch(action.type) {
// 		case 'ADD_SECTION':
// 			return Object.assign(state, {
// 				id: action.id,
// 				name: action.name,
// 				numMeasures: action.numMeasures,
// 				measures: [],
// 				clicked: false					
// 			})

// 		case 'REMOVE_SECTION':
// 			return state

// 		// case 'SET_SECTION_NAME':
// 		// 	return Object.assign(state, {name: action.name})
// 		// case 'MARK_SECTION_AS_CLICKED':
// 		// 	return Object.assign(state, {clicked: true})
// 		// case 'UNMARK_SECTION':
// 		// 	return Object.assign(state, {clicked: false})
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
			var cleanClone = clone.filter(function(ele) { return ele !== null })
			cleanClone = cleanClone.filter(function(ele) { return ele !== undefined })
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
		case 'SET_CHORD':
			var updatedSections = []
			var sanitizedChord = action.chord.replace("*", "𝄪")
			sanitizedChord = sanitizedChord.replace("#", "♯")
			sanitizedChord = sanitizedChord.replace(/[A-Za-z0-9](b{2})/, function(match) {
				var matchArray = match.split('')
				var rootNote = matchArray[0]
				return rootNote+"𝄫"
			})
			sanitizedChord = sanitizedChord.replace(/([b])/g, "♭")
			sanitizedChord = sanitizedChord.replace(/([a-g])/g, function replacer(match) {
				return match.toUpperCase()
			})
			sanitizedChord = sanitizedChord.replace("o", "°")
			// if(sanitizedChord[0] === "♭") {
			// 	var chordArray = sanitizedChord.split('')
			// 	chordArray[0] =  'B'
			// 	sanitizedChord = chordArray.join('')
			// }
			sanitizedChord = sanitizedChord.replace("BB", "B♭")

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
								chord: sanitizedChord,
								clicked: currentBeat.clicked
							}
						} else {
							var currentBeatClone = Object.assign({}, currentBeat)
							// var currentBeatClone = {
							// 	id: currentBeat.id,
							// 	measureIndex: currentMeasure.index,
							// 	sectionId: currentBeat.sectionId,
							// 	chord: currentBeat.chord,
							// 	clicked: currentbeat.clicked
							// }
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
		case 'SET_SECTION_NAME':
			var tempClone = state.map((section, index) => {
				if(section.id === action.sectionId) {
					return Object.assign(section, { name: action.name})
				}
				return section
			})
			return tempClone
		case 'MARK_SECTION_AS_CLICKED':
			var clone = state.map((currentSection, index) => {
				if(currentSection.id === action.sectionId) {
					return Object.assign(currentSection, {clicked: true})
				}
				return Object.assign(currentSection, {clicked: false})
			})
			return clone
		case 'MOVE_SECTION_UP':
			var sectionsClone = state
			var sectionToMove = sectionsClone.find(function(section) {
				return section.id === action.sectionId
			})
			var sectionToMoveIndex = sectionsClone.indexOf(sectionToMove)
			if(sectionToMoveIndex === 0) { return state }
			var sectionAbove = sectionsClone[sectionToMoveIndex-1]
			sectionsClone[sectionToMoveIndex-1] = sectionToMove
			sectionsClone[sectionToMoveIndex] = sectionAbove
			return sectionsClone

		case 'MOVE_SECTION_DOWN':
			var sectionsClone = state
			var movingSection = sectionsClone.find(function(section) {
				return section.id === action.sectionId
			})
			var movingSectionIndex = sectionsClone.indexOf(movingSection)
			if(movingSectionIndex === sectionsClone.length-1) { return state }
			var sectionBelow = sectionsClone[movingSectionIndex+1]
			sectionsClone[movingSectionIndex+1] = movingSection
			sectionsClone[movingSectionIndex] = sectionBelow
			return sectionsClone

		default:
			return state
	}
}

export default sections


