import React from 'react';

export default class TitleDisplay extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
    	clicked: false,
    	styles: {
    		editStyle: {
    			margin: '0 auto',
    			fontSize: '1.5em',
    			textAlign: 'center',
    			marginBottom: '0',
    			transition: 'font-size .3s',
          cursor: "url('/assets/images/edit.png'), text"

    		},
    		showStyle: {
    			margin: '0 auto',
    			fontSize: '2em',
    			textAlign: 'center',
    			marginBottom: '0',
    			transition: 'font-size .3s',
          cursor: 'default'
    		}
    	}
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(e) {
  	e.stopPropagation()
  	e.preventDefault()
  	if(this.props.filter === "EDIT") {
  		this.props.markBeatAsClicked(-1, -1, -1)
  		this.props.markSectionAsClicked(-1)
  		this.props.markMultiplierAsClicked(-1)	
  		this.props.markChartInfoAsClicked("TITLE")
  	}
  }

  handleChange(e) {
  	this.props.setTitle(e.target.value)
  }

  handleKeyDown(e) {
  	if(e.key==='Enter') {
  		this.props.markChartInfoAsClicked("NONE")
  	}
  	if(e.key==='Tab') {
  		e.preventDefault()
  		this.props.markChartInfoAsClicked("COMPOSER")
  	}
  	if(e.key==='ArrowDown') {
  		e.preventDefault()
  		this.props.markChartInfoAsClicked("COMPOSER")
  	}
  }

  render() {
  	var style
  	var thingToDisplay
  	if(this.props.filter==='EDIT') {
  		style = this.state.styles.editStyle
  	} else {
  		style = this.state.styles.showStyle
  	}
  	if(this.props.currentChartInfo==='TITLE') {
  		thingToDisplay = <input className={'title-input'} onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder={this.props.title} autoFocus/>
  	} else {
  		thingToDisplay = <p className={'title-p'}>{this.props.title}</p>
  	}

    return (
      <div style={style} onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}
