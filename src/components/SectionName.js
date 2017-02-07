import React from 'react';

export default class SectionName extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	styles: {
    		editStyle: {
          fontSize: '1em',
          transition: 'font-size .7s'

    		},
    		showStyle: {
          fontSize: '2em',
          transition: 'font-size .7s'

    		}
    	}
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
  	this.props.setSectionName(e.target.value, this.props.sectionId)
  }

  handleClick(e) {
  	e.stopPropagation();
  	e.preventDefault();
  	this.props.markBeatAsClicked(-1, -1, -1)
  	this.props.markSectionAsClicked(this.props.sectionId);

  }

  handleRightClick(e) {
  	e.preventDefault();
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.markSectionAsClicked(-1);
    }

  }

  render() {
  	var style

 	if(this.props.filter==='SHOW') {
 		style = this.state.styles.showStyle
 	} else {
 		style = this.state.styles.editStyle
 	}

    var thingToDisplay = <p className={'section-name'}>{this.props.name}</p>

    if(this.props.clicked) {
      thingToDisplay = <input ref={'input'} className={'section-name-input'} type={'text'} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.name} autoFocus/>
    } 
    return (
      <div style={style} onContextMenu={this.handleRightClick} onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}
