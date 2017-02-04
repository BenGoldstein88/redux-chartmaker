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
          height: '80%',
          minHeight: '80px',
          margin: '1%',
          width: '23%',
          border: '1px dashed purple',
          display: 'inline-block' ,
          backgroundColor: 'lightblue',
          opacity: '.5',
          position: 'relative',
          fontSize: '1em'
        },
        clickedStyle: {
          height: '80%',
          minHeight: '80px',
          margin: '1%',
          width: '23%',
          border: '1px dotted darkgray',
          display: 'inline-block' ,
          backgroundColor: 'darkblue',
          color: 'hotpink',
          opacity: '.9',
          position: 'relative',
          fontSize: '1em'
        },
        chordStyle: {
          height: '80%',
          minHeight: '80px',
          margin: '1%',
          width: '23%',
          border: '1px solid black',
          display: 'inline-block' ,
          backgroundColor: 'royalblue',
          color: 'goldenrod',
          textAlign: 'center',
          opacity: '1',
          position: 'relative',
          fontSize: '1em'
        },
        omitStyle: {},
        showStyle: {
          height: '80%',
          minHeight: '80px',
          margin: '1%',
          width: '23%',
          // border: '1px solid black',
          display: 'inline-block' ,
          backgroundColor: '#0c0c6d',
          color: 'white',
          textAlign: 'center',
          opacity: '1',
          position: 'relative',
          fontSize: '1.3em'          
        }

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
    if(this.props.filter === 'SHOW') {
      return
    }
  	this.props.markBeatAsClicked(this.props.sectionId, this.props.measureIndex, this.props.id);
    this.props.markSectionAsClicked(-1)
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
    if(e.key === 'ArrowUp') {
        this.props.markBeatAsClicked(this.props.sectionId, Math.max(0, this.props.measureIndex-4), this.props.id)
    }
    if(e.key === 'ArrowDown') {
        this.props.markBeatAsClicked(this.props.sectionId, Math.min(this.props.sectionLength-1, this.props.measureIndex+4), this.props.id)
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
    var thingToDisplay = <p style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }}>{this.props.chord} </p>;
    var style = this.state.styles.chordStyle
    if(this.props.chord.split('').length < 1 || this.props.chord === ' ') {
      style = this.state.styles.emptyStyle
    }

    if(this.props.clicked) {
      style = this.state.styles.clickedStyle
      thingToDisplay = <input ref={'input'} className={'chord-input'} type={'text'} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.chord} style={{color: 'inherit', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%'}} autoFocus/>
    }
    if(this.props.filter === 'SHOW') {
      // if(this.props.chord.split('').length < 1 || this.props.chord === ' ') {
      //   style = Object.assign(this.state.styles.showStyle, {backgroundColor: '#020235'})
      // } else {
        style = this.state.styles.showStyle
      // }
    }

    return (
      <div onClick={this.handleClick} style={style}>
      	{thingToDisplay}
      	
      </div>
    );
  }
}
