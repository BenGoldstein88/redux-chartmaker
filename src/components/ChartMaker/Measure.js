import React from 'react';
import Beat from './Beat';
import MeasureContextMenu from './MeasureContextMenu';
export default class Measure extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	beats: [],
    	beatsPerMeasure: 4,
      context: false
    }

    this.populateBeats = this.populateBeats.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.resetRightClick = this.resetRightClick.bind(this);

  }

  componentWillMount() {
    if(this.state.beats.length < 1) {
      this.populateBeats();
    }
  	// var beats = [];
  	// for(var i = 0; i < this.state.beatsPerMeasure; i++) {
  	// 	var beat = <Beat key={i} beatNumber={i} measureNumber={this.props.measureNumber} sectionNumber={this.props.sectionNumber} markAsSelected={this.props.markAsSelected} selectedBeatID={this.props.selectedBeatID} getSelectedBeatID={this.props.getSelectedBeatID }/>
  	// 	beats.push(beat);
  	// }
  	// this.setState({
  	// 	beats: beats
  	// })
  }

  populateBeats() {
    this.setState({
      beats: ['a', 'b', 'c', 'd']
    })
  }

  handleRightClick(e) {
    e.preventDefault();
    this.setState({
      context: !this.state.context
    })
  }

  resetRightClick() {
    this.setState({
      context: false
    })
  }



  render() {
    var beats = this.state.beats;
    var beatsToRender = [];
    for(var i = 0; i < beats.length; i++) {
      var beat = <Beat key={i} beatNumber={i} measureNumber={this.props.measureNumber} sectionNumber={this.props.sectionNumber} markAsSelected={this.props.markAsSelected} selectedBeatID={this.props.selectedBeatID} getSelectedBeatID={this.props.getSelectedBeatID }/>
      beatsToRender.push(beat);
    }
    var contextMenu = null;
    if(this.state.context) {
      contextMenu = <MeasureContextMenu removeMeasure={this.props.removeMeasure} measureNumber={this.props.measureNumber} resetRightClick={this.resetRightClick}/>
    }
    return (
      <div onContextMenu={this.handleRightClick} className={'measure'}>
      	{beatsToRender}
        {contextMenu}
      </div>
    );
  }
}
