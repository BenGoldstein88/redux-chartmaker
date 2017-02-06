const currentKey = (state = 'C', action) => {
  switch (action.type) {
    case 'SET_CURRENT_KEY':
      return action.key
    default:
      return state
  }
}

export default currentKey