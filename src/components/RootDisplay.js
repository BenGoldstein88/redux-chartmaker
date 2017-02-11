import React from 'react';

export default class RootDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	roots: {
    		naturals: ["C", "D", "E", "F", "G", "A", "B"],
    		sharps: ["C#", "D#", "F#", "G#", "A#"],
    		flats: ["Db", "Eb", "Gb", "Ab", "Bb"]
    	}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault()
  	var currentKey = this.props.currentKey
  	this.props.setCurrentKey(e.target.innerHTML)
  	this.props.transposeAllChords(currentKey, e.target.innerHTML)
  	// console.log("e.target: ", e.target);
  	// console.log("e.target.innerHTML: ", e.target.innerHTML);

  }

  render() {
  	var that = this
  	var naturalBoxes = this.state.roots.naturals.map(function(rootNote, index) {
  		if(rootNote===that.props.currentKey) {
  			return <div key={index} className={'root-box natural-box ' + 'root-box-' + rootNote + ' current-key-box'}><p className={'root-box-p'} onClick={that.handleClick}>{rootNote}</p></div>
  		} else {
  			return <div key={index} className={'root-box natural-box ' + 'root-box-' + rootNote}><p className={'root-box-p'} onClick={that.handleClick}>{rootNote}</p></div>
  		}
  	})
  	var naturalBoxesToDisplay = <div className={'natural-boxes'} >{naturalBoxes}</div>

  	var sharpBoxes = this.state.roots.sharps.map(function(rootNote, index) {
  		if(rootNote===that.props.currentKey) {
  			return <div key={index} className={'root-box sharp-box ' + 'root-box-' + rootNote[0] + 'sharp' + ' current-key-box'}><p className={'root-box-p'} onClick={that.handleClick}>{rootNote}</p></div>
  		} else {
  			return <div key={index} className={'root-box sharp-box ' + 'root-box-' + rootNote[0] + 'sharp'}><p className={'root-box-p'} onClick={that.handleClick}>{rootNote}</p></div>
  		}
  	})
  	var sharpBoxesToDisplay = <div className={'sharp-boxes'} >{sharpBoxes}</div>
  	var flatBoxes = this.state.roots.flats.map(function(rootNote, index) {
  		if(rootNote===that.props.currentKey) {
  			return <div key={index} className={'root-box flat-box ' + 'root-box-' + rootNote[0] + 'flat' + ' current-key-box'}><p className={'root-box-p'} onClick={that.handleClick}>{rootNote}</p></div>
  		} else {
  			return <div key={index} className={'root-box flat-box ' + 'root-box-' + rootNote[0] + 'flat'}><p className={'root-box-p'} onClick={that.handleClick}>{rootNote}</p></div>
  		}
  	})
  	var flatBoxesToDisplay = <div className={'flat-boxes'} >{flatBoxes}</div>
    return (
      <div style={{
      	width: '85%',
      	margin: '0 auto',
      	height: '15%',
      	// border: '1px solid orange',
      	position: 'absolute',
      	top: '0',
      	left: '-100px'
      }}>
      	<div className={'root-boxes-wrapper'}>
	      	{sharpBoxesToDisplay}
	      	{naturalBoxesToDisplay}
	      	{flatBoxesToDisplay}
	    </div>
      </div>
    );
  }
}
