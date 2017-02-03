import React from 'react';
import RemoveSectionButton from './RemoveSectionButton'
import AddMeasureButton from './AddMeasureButton';
import Measure from './Measure';

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
        return <Measure removeMeasure={that.props.removeMeasure} index={measure.index} key={measure.id} id={measure.id} sectionId={that.props.id} numBeats={measure.numBeats} beats={measure.beats} markBeatAsClicked={that.props.markBeatAsClicked} />
    })
    return (
      <div style={{
      	height: '200px',
      	width: '800px',
      	border: '1px solid blue'
      }}>
        {this.props.id}
        {measuresToRender}
        <AddMeasureButton sectionId={this.props.id} addMeasure={this.props.addMeasure} />
      	<RemoveSectionButton removeSection={this.props.removeSection} id={this.props.id} />
        
      </div>
    );
  }
}
