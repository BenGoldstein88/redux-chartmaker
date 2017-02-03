import React from 'react';
import RemoveSectionButton from './RemoveSectionButton'
import AddMeasureButton from './AddMeasureButton';
import Measure from './Measure';
import SectionName from './SectionName';

export default class Section extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    var that = this;
    const measuresToRender = this.props.measures.map(function(measure) {
        if(measure === null || measure === undefined) {
          return null
        }
        return <Measure removeMeasure={that.props.removeMeasure} index={measure.index} key={measure.id} id={measure.id} sectionId={that.props.id} numBeats={measure.numBeats} beats={measure.beats} markBeatAsClicked={that.props.markBeatAsClicked} setChord={that.props.setChord} />
    })
    return (
      <div style={{
      	height: '400px',
      	width: '800px',
      	border: '1px solid blue'
      }}>
        <SectionName name={this.props.name} sectionId={this.props.id} setSectionName={this.props.setSectionName} clicked={this.props.clicked} markSectionAsClicked={this.props.markSectionAsClicked}/>
        {measuresToRender}
        <AddMeasureButton sectionId={this.props.id} addMeasure={this.props.addMeasure} />
      	<RemoveSectionButton removeSection={this.props.removeSection} id={this.props.id} />
        
      </div>
    );
  }
}
