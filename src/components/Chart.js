import React from 'react';
import Section from './Section'
// import AddSectionButton from './AddSectionButton';

export default class Chart extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    var that = this;
  	const sectionsToRender = this.props.sections.map(function(section) {
	  		if(section === null || section === undefined) {
	  			return null
	  		}
	  		return <Section removeSection={that.props.actions.removeSection} key={section.id} id={section.id} name={section.name} numMeasures={section.numMeasures} measures={section.measures} clicked={section.clicked} addMeasure={that.props.actions.addMeasure} removeMeasure={that.props.actions.removeMeasure} markBeatAsClicked={that.props.actions.markBeatAsClicked} setChord={that.props.actions.setChord} setSectionName={that.props.actions.setSectionName} markSectionAsClicked={that.props.actions.markSectionAsClicked} moveSectionUp={that.props.actions.moveSectionUp} moveSectionDown={that.props.actions.moveSectionDown}/>
  	})
    return (
      <div>
      	{sectionsToRender}
      </div>
    );
  }
}
