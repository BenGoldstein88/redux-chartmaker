// import { connect } from 'react-redux'
// import { addSection } from '../actions'
// // import Chart from '../components/Chart'
// import AddSectionButton from '../components/AddSectionButton'

// const mapStateToProps = (state) => ({
// 	sections: state.sections
// })

// // // const mapDispatchToProps = ({
// // // 	onSectionClick: removeSection
// // // })

// const mapDispatchToProps = (state, ownProps) => {
// 	// console.log("state: ", state);
// 	// console.log("ownProps: ", ownProps);
// 	// console.log("dispatch: ", dispatch);
// 	return {
// 		addSection: addSection
// 	};
// }

// let AddSection = ({ dispatch }) => {
// 	return <AddSectionButton test={'hello'} />
// }

// AddSection = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// 	)(AddSectionButton)

// export default AddSection

// import React from 'react';
// import { connect } from 'react-redux'
// import { addSection } from '../actions'
// import AddSectionButton from '../components/AddSectionButton'

// // let AddSection = ({ dispatch }) => {
// // 	return (
// // 		<button onClick={e=> {
// // 			e.preventDefault()
// // 			dispatch(addSection())
// // 		}}>
// // 			ADD SECTION
// // 		</button>
// // 	)
// // }

// const mapStateToProps = (state) => ({
// 	sections: sections,
// 	test: '1',
// 	other: 4
// })

// const mapDispatchToProps = (state, ownProps) => ({
// 	addSection: addSection
// })

// const AddSection = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// 	)(AddSectionButton)

// export default AddSection


