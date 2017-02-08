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
  	this.props.setComposer(e.target.value)
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
  		thingToDisplay = <input className={'composer-input'} onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder={this.props.composer} autoFocus/>
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
