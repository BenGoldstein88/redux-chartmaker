const chartInfo = (state = 'NONE', action) => {
  switch (action.type) {
    case 'MARK_CHART_INFO_AS_CLICKED':
      return action.chartInfo
    default:
      return state
  }
}

export default chartInfo