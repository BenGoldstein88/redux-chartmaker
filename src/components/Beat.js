import React from 'react';

export default class Beat extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
      styles: {
        emptyStyle: {
          height: '50%',
          width: '24%',
          border: '1px dashed purple',
          display: 'inline-block' ,
          backgroundColor: 'lightblue',
          opacity: '.5'
        },
        clickedStyle: {
          height: '50%',
          width: '24%',
          border: '1px dotted darkgray',
          display: 'inline-block' ,
          backgroundColor: 'darkblue',
          color: 'hotpink',
          opacity: '.9'
        },
        chordStyle: {
          height: '50%',
          width: '24%',
          border: '1px solid black',
          display: 'inline-block' ,
          backgroundColor: 'royalblue',
          color: 'goldenrod',
          opacity: '1'
        },
        omitStyle: {}

      }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
  	e.preventDefault();
  	this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex, this.props.id);
  }

  handleKeyDown(e) {
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

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.markBeatAsClicked(-1, -1, -1)
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.props.setChord(e.target.value, this.props.sectionId, this.props.measureIndex, this.props.id)
  }



  render() {
    var thingToDisplay = this.props.chord;
    var style = this.state.styles.chordStyle
    if(this.props.chord.split('').length < 1) {
      style = this.state.styles.emptyStyle
    }

    if(this.props.clicked) {
      style = this.state.styles.clickedStyle
      thingToDisplay = <input ref={'input'} className={'chord-input'} type={'text'} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.chord} style={{color: 'inherit'}}autoFocus/>
    }

    return (
      <div onClick={this.handleClick} style={style}>
      	{thingToDisplay}
      	
      </div>
    );
  }
}
