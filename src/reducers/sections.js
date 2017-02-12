
function trueTransposeChord(chord, key, newKey) {

	var scales = {
		// scale_form = [1-7, #1-7, b1-7, *1-7, bb1-7]
		"CScale": ["C", "D", "E", "F", "G", "A", "B", "C#", "D#", "E#", "F#", "G#", "A#", "B#", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C*", "D*", "E*", "F*", "G*", "A*", "B*", "Cbb", "Dbb", "Ebb", "Fbb", "Gbb", "Abb", "Bbb"],
		"GScale": ["G", "A", "B", "C", "D", "E", "F#", "G#", "A#", "B#", "C#", "D#", "E#", "F*", "Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "G*", "A*", "B*", "C*", "D*", "E*", "F#*", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb", "Fb"],
		"DScale": ["D", "E", "F#", "G", "A", "B", "C#", "D#", "E#", "F*", "G#", "A#", "B#", "C*", "Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "D*", "E*", "F#*", "G*", "A*", "B*", "C#*", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb", "Cb"],
		"AScale": ["A", "B", "C#", "D", "E", "F#", "G#", "A#", "B#", "C*", "D#", "E#", "F*", "G*", "Ab", "Bb", "C", "Db", "Eb", "F", "G", "A*", "B*", "C#*", "D*", "E*", "F#*", "G#*", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb", "Gb"],
		"EScale": ["E", "F#", "G#", "A", "B", "C#", "D#", "E#", "F*", "G*", "A#", "B#", "C*", "D*", "Eb", "F", "G", "Ab", "Bb", "C", "D", "E*", "F#*", "G#*", "A*", "B*", "C#*", "D#*", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb", "Db"],
		"BScale": ["B", "C#", "D#", "E", "F#", "G#", "A#", "B#", "C*", "D*", "E#", "F*", "G*", "A*", "Bb", "C", "D", "Eb", "F", "G", "A", "B*", "C#*", "D#*", "E*", "F#*", "G#*", "A#*", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab"],
		"F#Scale": ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F*", "G*", "A*", "B#", "C*", "D*", "E*", "F", "G", "A", "Bb", "C", "D", "E", "F#*", "G#*", "A#*", "B*", "C#*", "D#*", "E#*", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
		"C#Scale": ["C#", "D#", "E#", "F#", "G#", "A#", "B#", "C*", "D*", "E*", "F*", "G*", "A*", "B*", "C", "D", "E", "F", "G", "A", "B", "C#*", "D#*", "E#*", "F#*", "G#*", "A#*", "B#*", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
		"G#Scale": ["G#", "A#", "B#", "C#", "D#", "E#", "F*", "G*", "A*", "B*", "C*", "D*", "E*", "F#*", "G", "A", "B", "C", "D", "E", "F#", "G#*", "A#*", "B#*", "C#*", "D#*", "E#*", "F**", "Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
		"D#Scale": ["D#", "E#", "F*", "G#", "A#", "B#", "C*", "D*", "E*", "F#*", "G*", "A*", "B*", "C#*", "D", "E", "F#", "G", "A", "B", "C#", "D#*", "E#*", "F**", "G#*", "A#*", "B#*", "C**", "Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
		"A#Scale": ["A#", "B#", "C*", "D#", "E#", "F*", "G*", "A*", "B*", "C#*", "D*", "E*", "F#*", "G#*", "A", "B", "C#", "D", "E", "F#", "G#", "A#*", "B#*", "C**", "D#*", "E#*", "F**", "G**", "Ab", "Bb", "C", "D#", "Eb", "F", "G"],
		// E#Scale:
		// B#Scale:	
		"FScale": ["F", "G", "A", "Bb", "C", "D", "E", "F#", "G#", "A#", "B", "C#", "D#", "E#", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "F*", "G*", "A*", "B#", "C*", "D*", "E*", "Fbb", "Gbb", "Abb", "Bbbb", "Cbb", ,"Dbb", ,"Ebb"],
		"BbScale": ["Bb", "C", "D", "Eb", "F", "G", "A", "B", "C#", "D#", "E", "F#", "G#", "A#", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab", "B#", "C*", "D*", "E#", "F*", "G*", "A*", "Bbbb", "Cbb", "Dbb", "Ebbb", "Fbb", "Gbb", "Abb"],
		"EbScale": ["Eb", "F", "G", "Ab", "Bb", "C", "D", "E", "F#", "G#", "A", "B", "C#", "D#", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb", "Db", "E#", "F*", "G*", "A#", "B#", "C*", "D*", "Ebbb", "Fbb", "Gbb", "Abbb", "Bbbb", "Cbb", "Dbb"],
		"AbScale": ["Ab", "Bb", "C", "Db", "Eb", "F", "G", "A", "B", "C#", "D", "E", "F#", "G#", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb", "Gb", "A#", "B#", "C*", "D#", "E#", "F*", "G*", "Abbb", "Bbbb", "Cbb", "Dbbb", "Ebbb", "Fbb", "Gbb"],
		"DbScale": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "D", "E", "F#", "G", "A", "B", "C#", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb", "Cb", "D#", "E#", "F*", "G#", "A#", "B#", "C*", "Dbbb", "Ebbb", "Fbb", "Gbbb", "Abbb", "Bbbb", "Cbb"],
		"GbScale": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "G", "A", "B", "C", "D", "E", "F#", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb", "Fb", "G#", "A#", "B#", "C#", "D#", "E#", "F*", "Gbbb", "Abbb", "Bbbb", "Cbbb", "Dbbb", "Ebbb", "Fbb"]
		// CbScale:
		// FbScale:
		// BbbFlatScale:
		//  ...
	}	


	var oldKeyScale = scales[key + "Scale"]
	var newKeyScale = scales[newKey + "Scale"]

	if(key==="KEY") {
		oldKeyScale = newKeyScale
	}


	var transposedChord
	transposedChord = chord.replace(/(([CDEFGAB]#\*)|([CDEFGAB]#)|([CDEFGAB]b+)|([CDEFGAB]\**))/g, function(match) {
		var i = oldKeyScale.indexOf(match)
		return newKeyScale[i]
	})
	return transposedChord

}

function transposeChord(chord, key, newKey) {
	var cSharpScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

    var sharpScale = ["B#", "C#", "D", "D#", "E", "E#", "F#", "G", "G#", "A", "A#", "B"]
    var flatScale = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "Cb" ]
    // var flatScale = ["Dbb", "Db", "Ebb", "Eb", "Fb", "F", "Gb", "Abb", "Ab","Bbb", "Bb", "Cb"]
    var amount
    var transposedChord


    if(cSharpScale.includes(newKey) && cSharpScale.includes(key)) {
		amount = cSharpScale.indexOf(newKey) - cSharpScale.indexOf(key)
		transposedChord =  chord.replace(/([CDEFGAB]#?)/g,
			function(match) {
				if(cSharpScale.includes(match)) {
					var i = (cSharpScale.indexOf(match) + amount) % cSharpScale.length;
					if(newKey === 'C' || newKey === 'G') {
						return cSharpScale[ i < 0 ? i + cSharpScale.length : i ];
					} else {
						if(newKey === 'F') {
							return flatScale[ i < 0 ? i + flatScale.length : i ]
						} else {
							return sharpScale[ i < 0 ? i + sharpScale.length : i ]
						}
					}					
				} else {
					var i = (sharpScale.indexOf(match) + amount) % sharpScale.length;
					if(newKey === 'C' || newKey === 'G') {
						return cSharpScale[ i < 0 ? i + cSharpScale.length : i ];
					} else {
						if(newKey === 'F') {
							return flatScale[ i < 0 ? i + flatScale.length : i ]
						} else {
							return sharpScale[ i < 0 ? i + sharpScale.length : i ]
						}
					}					
				}
			});
		return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
    if(flatScale.includes(newKey) && flatScale.includes(key)) {
      amount = flatScale.indexOf(newKey) - flatScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]b*)/g,
      function(match) {
        var i = (flatScale.indexOf(match) + amount) % flatScale.length;
        return flatScale[ i < 0 ? i + flatScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
    if(flatScale.includes(newKey) && sharpScale.includes(key)) {
      amount = flatScale.indexOf(newKey) - sharpScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]#?)/g,
      function(match) {
        var i = (sharpScale.indexOf(match) + amount) % sharpScale.length;
        return flatScale[ i < 0 ? i + flatScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
    if(sharpScale.includes(newKey) && flatScale.includes(key)) {
      amount = sharpScale.indexOf(newKey) - flatScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]b*)/g,
      function(match) {
        var i = (flatScale.indexOf(match) + amount) % flatScale.length;
        return sharpScale[ i < 0 ? i + sharpScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
  }

function sections(state = [], action) {
	switch(action.type) {
		case 'ADD_SECTION':
			if(!action.duplicate) {
				return [
					...state,
					{
						id: action.id,
						name: action.name,
						numMeasures: action.numMeasures,
						measures: [],
						clicked: false,
						multiplier: 1,
						multiplierClicked: false		
					}
				]				
			} else {
				var sectionToDuplicate = state.find(function(section) {
					return section.id === action.sectionId
				})
				// var measuresToDuplicate = sectionToDuplicate.measures
				// var duplicatedMeasures = []
				// for(var i in measuresToDuplicate) {
				// 	var measuresToDuplicate = measuresToDuplicate[i]

				// }

				var duplicatedSection = {
					id: action.id,
					name: sectionToDuplicate.name,
					numMeasures: sectionToDuplicate.numMeasures,
					measures: sectionToDuplicate.measures,
					clicked: false,
					multiplier: sectionToDuplicate.multiplier,
					multiplierClicked: false
				}
				return [
					...state,
					duplicatedSection
				]

			}
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
						clicked: false,
						multiplier: section.multiplier,
						multiplierClicked: section.multiplierClicked							
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
						clicked: section.clicked,
						multiplier: section.multiplier,
						multiplierClicked: section.multiplierClicked							
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
								clicked: true
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
					measures: currentMeasures,
					multiplier: currentSection.multiplier,
					multiplierClicked: currentSection.multiplierClicked
				}
				updatedSections.push(currentSectionClone)
			}
			return updatedSections
		case 'SET_CHORD':
			var updatedSections = []
			if(!action.chord) { return state }
			var sanitizedChord = action.chord[0].toUpperCase() + action.chord.substring(1, action.chord.length)

			// var sanitizedChord = action.chord.replace("*", "𝄪")
			// sanitizedChord = sanitizedChord.replace("#", "♯")
			// sanitizedChord = sanitizedChord.replace(/[A-Za-z0-9](b{2})/, function(match) {
			// 	var matchArray = match.split('')
			// 	var rootNote = matchArray[0]
			// 	return rootNote+"𝄫"
			// })
			// sanitizedChord = sanitizedChord.replace(/([b])/g, "♭")
			// sanitizedChord = sanitizedChord.replace(/([a-g])/g, function replacer(match) {
			// 	return match.toUpperCase()
			// })
			// sanitizedChord = sanitizedChord.replace("o", "°")
			// // if(sanitizedChord[0] === "♭") {
			// // 	var chordArray = sanitizedChord.split('')
			// // 	chordArray[0] =  'B'
			// // 	sanitizedChord = chordArray.join('')
			// // }
			// sanitizedChord = sanitizedChord.replace("BB", "B♭")

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
					measures: currentMeasures,
					multiplier: currentSection.multiplier,
					multiplierClicked: currentSection.multiplierClicked
				}
				updatedSections.push(currentSectionClone)
			}
			return updatedSections
		case 'TRANSPOSE_ALL_CHORDS':
			var transposedSections = []
			var untransposedChord = action.chord
			var oldKey = action.oldKey
			var newKey = action.newKey
			if(oldKey === newKey) {
				return state
			}

			for(var i in state) {
				var currentSection = state[i]

				var currentMeasures = []
				for(var j in currentSection.measures) {
					var currentMeasure = currentSection.measures[j]

					var currentBeats = []
					for(var k in currentMeasure.beats) {
						var currentBeat = currentMeasure.beats[k]
						// var transposedChord =
						var currentBeatClone = Object.assign(currentBeat, {chord: trueTransposeChord(currentBeat.chord, oldKey, newKey)})
						// var currentBeatClone = 
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
					measures: currentMeasures,
					multiplier: currentSection.multiplier,
					multiplierClicked: currentSection.multiplierClicked
				}
				transposedSections.push(currentSectionClone)
			}
			return transposedSections			
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
		case 'MARK_MULTIPLIER_AS_CLICKED':
			var cloneSections = state.map((currentSection, index) => {
				if(currentSection.id === action.sectionId) {
					return Object.assign(currentSection, {multiplierClicked: true})
				}
				return Object.assign(currentSection, {multiplierClicked: false})
			})
			return cloneSections
		case 'SET_MULTIPLIER':
			var newlyClonedSections = state.map((currentSection, index) => {
				if(currentSection.id === action.sectionId) {
					return Object.assign(currentSection, {multiplier: action.multiplier})
				}
				return Object.assign(currentSection, {})
			})
			return newlyClonedSections

		default:
			return state
	}
}

export default sections


