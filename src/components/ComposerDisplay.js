import React from 'react';

export default class ComposerDisplay extends React.Component {
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
    			textAlign: 'center'
    		},
    		showStyle: {
    			margin: '0 auto',
    			fontSize: '1.2em',
    			textAlign: 'center'
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
  		this.props.markChartInfoAsClicked("COMPOSER")
  	}
  }

  handleChange(e) {
  	this.props.setComposer(e.target.value)
  }

  handleKeyDown(e) {
  	if(e.key==='Enter') {
  		this.props.markChartInfoAsClicked("NONE")
  	}

  	if(e.key==='ArrowDown' || e.key==='Tab') {
  		e.preventDefault()
  		this.props.markChartInfoAsClicked("ARRANGER")
  	}
  	if(e.key==='ArrowUp') {
  		this.props.markChartInfoAsClicked("TITLE")
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
  	if(this.props.currentChartInfo==='COMPOSER') {
  		thingToDisplay = <input style={{
  			fontSize: '1.1em',
  			textAlign: 'center',
  			border: 'none',
  			backgroundColor: 'inherit'
  		}} className={'composer-input'} onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder={this.props.composer} autoFocus/>
  	} else {
  		thingToDisplay = <p className={'composer-p'}>{this.props.composer}</p>
  	}

    return (
      <div style={style} onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}
