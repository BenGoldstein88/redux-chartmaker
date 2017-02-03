import React from 'react';

export default class SectionName extends React.Component {


  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
  	this.props.changeName(e.target.value);
  	// this.setState({
  	// 	clicked: false
  	// })
  }

  handleClick(e) {
  	e.stopPropagation();
  	this.props.markSectionAsSelected(this.props.sectionNumber);
  }

  handleRightClick(e) {
  	e.preventDefault();
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.markSectionAsSelected(-1);
    }

  }

  render() {
    var thingToDisplay = <p className={'section-name'}>{this.props.name}</p>

    if(this.props.selectedSectionNumber === this.props.sectionNumber) {
      thingToDisplay = <input ref={'input'} className={'section-name-input'} type={'text'} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.name} autoFocus/>
    } 
    return (
      <div className={'section-name-wrapper'} onContextMenu={this.handleRightClick} onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}
