import React from 'react';
import SectionButtonToolbar from './SectionButtonToolbar';
import Measure from './Measure';
import SectionName from './SectionName';
// import Draggable from 'react-draggable'

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
          minHeight: '300px',
          width: '95%',
          margin: '0 auto',
          // display: 'inline-block',
          border: '1px solid blue',
          // overflow: 'scroll',
          position: 'relative'
        }} className=''>
          <SectionName name={this.props.name} sectionId={this.props.id} setSectionName={this.props.setSectionName} clicked={this.props.clicked} markSectionAsClicked={this.props.markSectionAsClicked}/>
          <div style={{margin: '0 auto', width: '98%', height: '80%', position: 'relative'}}>
            {measuresToRender}
          </div>
          <SectionButtonToolbar sectionId={this.props.id} addMeasure={this.props.addMeasure} removeSection={this.props.removeSection} id={this.props.id} moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} />
        </div>
    );
  }
}
