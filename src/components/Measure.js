import React from 'react';
import RemoveMeasureButton from './RemoveMeasureButton';
import Beat from './Beat';

export default class Measure extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    var that = this;
  	const beatsToRender = that.props.beats.map(function(beat, index) {
  		return <Beat clicked={beat.clicked} chord={beat.chord} key={index} id={index} measureId={that.props.id} sectionId={that.props.sectionId} markBeatAsClicked={that.props.markBeatAsClicked} measureIndex={that.props.index} setChord={that.props.setChord}/>
  	})
    return (
      <div style={{
      	height: '40%',
        minHeight: '100px',
        maxHeight: '150px',
      	width: '24%',
      	border: '1px solid pink',
      	display: 'inline-block',
        margin: '2px'
      }}>
        <div style={{
          margin: '0 auto',
          display: 'relative',
          width: '95%'
        }}>
      	 {beatsToRender}
        </div>
      	<br />
      	<RemoveMeasureButton removeMeasure={this.props.removeMeasure} id={this.props.id} sectionId={this.props.sectionId} />
      </div>
    );
  }
}
