const arranger = (state = 'Benny G', action) => {
  switch (action.type) {
    case 'SET_ARRANGER':
      return action.arranger
    default:
      return state
  }
}

export default arranger