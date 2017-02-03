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
	  		return <Section removeSection={that.props.actions.removeSection} key={section.id} id={section.id} name={section.name} numMeasures={section.numMeasures} measures={section.measures} addMeasure={that.props.actions.addMeasure} removeMeasure={that.props.actions.removeMeasure} />
  	})
    return (
      <div>
      	{sectionsToRender}
      </div>
    );
  }
}
