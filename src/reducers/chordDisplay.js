const chordDisplay = (state = 'CHORD', action) => {
  switch (action.type) {
    case 'SET_CHORD_DISPLAY':
      return action.display
    default:
      return state
  }
}

export default chordDisplay