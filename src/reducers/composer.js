const composer = (state = 'Ben Goldstein', action) => {
  switch (action.type) {
    case 'SET_COMPOSER':
      return action.composer
    default:
      return state
  }
}

export default composer