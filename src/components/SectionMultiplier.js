import React from 'react';

export default class SectionMultiplier extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(e) {
  	e.stopPropagation()
  	e.preventDefault()
    this.props.markBeatAsClicked(-1, -1, -1)
    this.props.markSectionAsClicked(-1)
    this.props.markChartInfoAsClicked("NONE")
    this.props.markMultiplierAsClicked(this.props.sectionId)

  }

  handleChange(e) {
  	e.preventDefault()
  	this.props.setMultiplier(this.props.sectionId, e.target.value)


  }

  handleKeyDown(e) {
    if(e.key === 'Enter' || e.key === 'Tab') {
  	   e.preventDefault()
  		this.props.markMultiplierAsClicked(-1)
  	}

  }

  render() {

  	var className = 'section-multiplier-'
  	var pClassName = 'section-multiplier-p-'
  	var thingToDisplay
  	if(this.props.filter==='EDIT') {
		className += 'edit'
		pClassName += 'edit'
  		if(this.props.multiplierClicked) {
  			thingToDisplay = <input onChange={this.handleChange} placeholder={this.props.multiplier} onKeyDown={this.handleKeyDown} className={'multiplier-input'} autoFocus/>
  		} else {
  			thingToDisplay = <p className={pClassName}>x{this.props.multiplier}</p>
  		}
  	} else {
  		className += 'show'
  		pClassName += 'show'
      if(this.props.multiplier==='1' || this.props.multiplier===1|| this.props.multiplier==='' || this.props.multiplier===' ') {
        thingToDisplay = null
      } else {
  		  thingToDisplay = <p className={pClassName}>x{this.props.multiplier}</p>
      }
  	}
    return (
      <div onClick={this.handleClick} className={className}>
      	{thingToDisplay}
      </div>
    );
  }
}
