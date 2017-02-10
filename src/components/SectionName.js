import React from 'react';

export default class SectionName extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	styles: {
    		editStyle: {
          fontSize: '1em',
          minWidth: '50px',
          minHeight: '50px',
          marginLeft: '5%',
          marginBottom: '15px',
          transition: 'font-size .7s',
          cursor: "url('/assets/images/edit.png'), text"

    		},
    		showStyle: {
          fontSize: '2em',
          marginLeft: '5%',
          transition: 'font-size .7s',
          height: '50px',
          marginBottom: '20px',
          cursor: 'default'

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
    if(this.props.filter==="EDIT") {
    	this.props.markBeatAsClicked(-1, -1, -1)
      this.props.markChartInfoAsClicked("NONE")
      this.props.markMultiplierAsClicked(-1)
    	this.props.markSectionAsClicked(this.props.sectionId);
    }

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

    var thingToDisplay = <p className={'section-name-p'}>{this.props.name}</p>

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
