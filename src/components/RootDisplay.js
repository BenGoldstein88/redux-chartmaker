import React from 'react';

export default class RootDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	roots: ["C", "D", "E", "F", "G", "A", "B", "C#", "D#", "F#", "G#", "A#", "Db", "Eb", "Gb", "Ab", "Bb"]
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
  	var rootBoxes = this.state.roots.map(function(rootNote, index) {
  		return <div key={index} style={{
  			border: '1px solid black',
  			display: 'inline-block',
  			width: '50px',
  			height: '50px'
  		}} onClick={that.handleClick}>
  			{rootNote}
  		</div>
  	})
    return (
      <div style={{
      	width: '500px',
      	height: '140px',
      	border: '1px solid orange'
      }}>
      	{rootBoxes}
      </div>
    );
  }
}
