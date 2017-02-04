import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as ChartActions from '../actions'

// const App = ({sections, filter, actions}) => (
//   <div>
//     <Home sections={sections} actions={actions} filter={filter}/>
//   </div>
// )

// App.propTypes = {
//   sections: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  sections: state.sections,
  filter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ChartActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)