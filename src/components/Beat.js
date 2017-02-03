import React from 'react';

export default class Beat extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex, this.props.id);
  }

  handleKeyDown(e) {
    console.log("e.key: ", e.key);

    if(e.key === 'ArrowRight') {
      if(this.props.id < 3) {
        this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex, this.props.id+1)
      } else {
        this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex+1, 0)
      }
    }
    if(e.key === 'ArrowLeft') {
      if(this.props.id < 1) {
        this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex-1, 3)
      } else {
        this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex, this.props.id-1)
      }
    }
      
  }



  render() {
    var background = 'inherit'
    var thingToDisplay = this.props.chord
    if(this.props.clicked) {
      background = 'goldenrod'
      thingToDisplay = <input ref={'input'} className={'chord-input'} type={'text'} onKeyDown={this.handleKeyDown} placeholder={this.props.chord} autoFocus/>
    }
    return (
      <div onClick={this.handleClick} style={{
      	height: '50%',
      	width: '24%',
      	border: '1px solid green',
      	display: 'inline-block',
      	backgroundColor: background
      }}>
      	{thingToDisplay}
      	
      </div>
    );
  }
}
