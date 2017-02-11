import React from 'react';
import SectionButtonToolbar from './SectionButtonToolbar';
import Measure from './Measure';
import SectionName from './SectionName';
import SectionMultiplier from './SectionMultiplier';
// import Draggable from 'react-draggable'

export default class Section extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
      styles: {
        showStyle: {
          minHeight: '30px',
          width: '98%',
          minWidth: '420px',
          margin: '0 auto',
          // border: '1px solid blue',
          position: 'relative',
          padding: '1%',
          borderRadius: '25px',
          transition: 'width .5s, border .5s, padding .5s, box-shadow .5s, background-color .5s'
        },
        editStyle: {
          minHeight: '150px',
          width: '97%',
          margin: '0 auto',
          minWidth: '420px',
          // display: 'inline-block',
          // border: '1px solid blue',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: '4px solid black',
          borderRadius: '25px',
          // overflow: 'scroll',
          position: 'relative',
          paddingBottom: '5%',
          paddingLeft: '10px',
          marginTop: '5px',
          marginBottom: '5px',
          boxShadow: '5px 5px 5px darkgray',
          backgroundColor: '#c0cbdb',
          transition: 'width .5s, border .5s, padding .5s, box-shadow .5s, background-color .5s'
        }
      }
    }
  }

  render() {
    var style;
    if(this.props.filter==='SHOW') {
      style = this.state.styles.showStyle
    } else {
      style = this.state.styles.editStyle
    }
    var that = this;
    const measuresToRender = this.props.measures.map(function(measure) {
        if(measure === null || measure === undefined) {
          return null
        }
        return <Measure
          removeMeasure={that.props.removeMeasure}
          index={measure.index}
          key={measure.id}
          id={measure.id}
          sectionId={that.props.id}
          numBeats={measure.numBeats}
          beats={measure.beats}
          markBeatAsClicked={that.props.markBeatAsClicked}
          markSectionAsClicked={that.props.markSectionAsClicked}
          setChord={that.props.setChord}
          filter={that.props.filter}
          sectionLength={that.props.measures.length}
          currentKey={that.props.currentKey}
          display={that.props.display}
          markChartInfoAsClicked={that.props.markChartInfoAsClicked}
          markMultiplierAsClicked={that.props.markMultiplierAsClicked} />
    })
    return (
        <div style={style} className=''>
          <SectionName 
            name={this.props.name}
            sectionId={this.props.id}
            setSectionName={this.props.setSectionName}
            clicked={this.props.clicked}
            filter={this.props.filter}
            markBeatAsClicked={this.props.markBeatAsClicked}
            markSectionAsClicked={this.props.markSectionAsClicked}
            markChartInfoAsClicked={this.props.markChartInfoAsClicked}
            markMultiplierAsClicked={this.props.markMultiplierAsClicked}/>
          <div style={{margin: '0 auto', width: '100%', maxHeight: '80%', position: 'relative'}}>
            {measuresToRender}
          </div>
          <SectionButtonToolbar sectionId={this.props.id} addMeasure={this.props.addMeasure} removeSection={this.props.removeSection} id={this.props.id} moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} filter={this.props.filter} sectionName={this.props.name} addSection={this.props.addSection}/>
          <SectionMultiplier filter={this.props.filter} multiplier={this.props.multiplier} multiplierClicked={this.props.multiplierClicked} markBeatAsClicked={this.props.markBeatAsClicked} markSectionAsClicked={this.props.markSectionAsClicked} markChartInfoAsClicked={this.props.markChartInfoAsClicked} markMultiplierAsClicked={this.props.markMultiplierAsClicked} setMultiplier={this.props.setMultiplier} sectionId={this.props.id} />
        </div>
    );
  }
}
