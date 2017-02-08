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
    			textAlign: 'center'
    		},
    		showStyle: {
    			margin: '0 auto',
    			fontSize: '2em',
    			textAlign: 'center'
    		}
    	}
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
  	e.preventDefault()
  	if(this.props.filter === "EDIT") {	
	  	this.setState({
	  		clicked: !this.state.clicked
	  	})
  	}
  }

  handleChange(e) {
  	this.props.setTitle(e.target.value)
  }

  handleKeyPress(e) {
  	if(e.key==='Enter' || e.key==='Tab') {
  		this.setState({
  			clicked: !this.state.clicked
  		})
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
  	if(this.state.clicked) {
  		thingToDisplay = <input className={'title-input'} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.title} autoFocus/>
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
