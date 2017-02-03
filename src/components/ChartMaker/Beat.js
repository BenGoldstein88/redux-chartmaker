import React from 'react';

export default class Beat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	chord: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getBeatID = this.getBeatID.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }




  getBeatID() {
    var beatNumber = this.props.beatNumber;
    var measureNumber = this.props.measureNumber;
    var sectionNumber = this.props.sectionNumber;

    var beatID = "" + sectionNumber + "" + measureNumber + "" + beatNumber;

    return beatID;    
  }

  handleClick(e) {
    // e.preventDefault();
    e.stopPropagation();

    this.props.markAsSelected(this.getBeatID());

  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.markAsSelected('-1');
    }
  }

  handleKeyDown(e) {
    console.log("e.key: ", e.key);
    var measureNumber = this.props.measureNumber;
    var sectionNumber = this.props.sectionNumber; 
    if(e.key === 'ArrowRight') {
      var beatNumber = parseInt(this.props.beatNumber)+1;
      if(beatNumber > 3) {
        beatNumber = 0;
        measureNumber = parseInt(measureNumber)+1;
      }
      var nextBeatID = "" + sectionNumber + "" + measureNumber + "" + beatNumber;
      this.props.markAsSelected(nextBeatID);

    }
    if(e.key === 'ArrowLeft') {
      var beatNumber = parseInt(this.props.beatNumber)-1;
      if(beatNumber < 0) {
        beatNumber = 3;
        measureNumber = parseInt(measureNumber)-1;
      }
      var nextBeatID = "" + sectionNumber + "" + measureNumber + "" + beatNumber;
      this.props.markAsSelected(nextBeatID);
    }
      
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      chord: e.target.value
    })
  }

  render() {
    var thingToDisplay = <p className={'beat-chord'}>{this.state.chord}</p>
    var className = 'beat'

    if(this.props.selectedBeatID === this.getBeatID()) {
      className += ' clicked-beat';
      thingToDisplay = <input ref={'input'} className={'chord-input'} type={'text'} onKeyPress={this.handleKeyPress} placeholder={this.state.chord} autoFocus/>
    } 

    return (
      <div onClick={this.handleClick} onChange={this.handleChange} onKeyPress={this.handleKeyPress} onKeyDown={this.handleKeyDown} className={className}>
      	{thingToDisplay}
      </div>
    );
  }
}
