import React from 'react';

export default class ArrangerDisplay extends React.Component {
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
    			fontSize: '1em',
    			textAlign: 'center',
    			marginBottom: '5px',
    			transition: 'font-size .3s',
          cursor: "url('/assets/images/edit.png'), text"

    		},
    		showStyle: {
    			margin: '0 auto',
    			fontSize: '1.2em',
    			textAlign: 'center',
    			marginBottom: '5px',
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
  	e.preventDefault()
  	e.stopPropagation()
  	if(this.props.filter === "EDIT") {
  		this.props.markBeatAsClicked(-1, -1, -1)
  		this.props.markSectionAsClicked(-1)	
  		this.props.markMultiplierAsClicked(-1)		
  		this.props.markChartInfoAsClicked("ARRANGER")

  	}
  }
  handleChange(e) {
  	this.props.setArranger(e.target.value)
  }

  handleKeyDown(e) {
  	if(e.key==='Enter' || e.key==='Tab') {
  		e.preventDefault()
  		this.props.markChartInfoAsClicked("NONE")
  	}

  	if(e.key==='ArrowUp') {
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
  	if(this.props.currentChartInfo==="ARRANGER") {
  		thingToDisplay = <input style={{
  			fontSize: '1.1em',
  			textAlign: 'center',
  			border: 'none',
  			backgroundColor: 'inherit'
  		}} className={'arranger-input'} onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder={this.props.arranger} autoFocus/>
  	} else {
  		thingToDisplay = <p className={'arranger-p'}><em>arr:</em> {this.props.arranger}</p>
  	}

    return (
      <div style={style} onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}