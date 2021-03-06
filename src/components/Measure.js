import React from 'react';
import RemoveMeasureButton from './RemoveMeasureButton';
import Beat from './Beat';

export default class Measure extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
      styles: {
        showStyle: {
          height: '45%',
          minHeight: '100px',
          maxHeight: '150px',
          minWidth: '150px',
          width: '24.5%',
          // border: '1px solid pink',
          // padding: '1px',
          display: 'inline-block',
          margin: '2px'
        },
        editStyle: {
          height: '40%',
          minHeight: '100px',
          maxHeight: '150px',
          minWidth: '150px',
          width: '24.25%',
          // boxShadow: '5px 5px 20px darkgray',
          borderRadius: '10px',
          // border: '1px solid pink',
          // padding: '1px',
          display: 'inline-block',
          margin: '2px'
        }
      }
    }
  }

  render() {
    var style;
    if(this.props.filter === 'SHOW') {
      style = this.state.styles.showStyle
    } else {
      style = this.state.styles.editStyle
    }
    var that = this;
  	const beatsToRender = that.props.beats.map(function(beat, index) {
  		return <Beat
        clicked={beat.clicked}
        chord={beat.chord}
        key={index}
        id={index}
        measureId={that.props.id}
        sectionId={that.props.sectionId}
        markBeatAsClicked={that.props.markBeatAsClicked}
        markSectionAsClicked={that.props.markSectionAsClicked}
        markChartInfoAsClicked={that.props.markChartInfoAsClicked}
        markMultiplierAsClicked={that.props.markMultiplierAsClicked}
        measureIndex={that.props.index}
        setChord={that.props.setChord}
        filter={that.props.filter}
        sectionLength={that.props.sectionLength}
        currentKey={that.props.currentKey}
        display={that.props.display} />
  	})
    return (
      <div style={style}>
        <div style={{
          margin: '0 auto',
          display: 'relative',
          width: '99%'
        }}>
      	 {beatsToRender}
        </div>
      	<RemoveMeasureButton removeMeasure={this.props.removeMeasure} id={this.props.id} sectionId={this.props.sectionId} filter={that.props.filter}/>
      </div>
    );
  }
}
