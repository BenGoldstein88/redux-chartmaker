import React from 'react';

export default class ChooseKey extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
    	clicked: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.setState({
  		clicked: !this.state.clicked
  	})
  }

  handleChange(e) {
  	e.preventDefault()
  	this.props.setCurrentKey(e.target.value)
  }

  handleKeyPress(e) {
  	if(e.key === 'Enter') {
  		this.setState({
  			clicked: false
  		})
  	}
  }

  render() {
  	var thingToDisplay
  	if(this.state.clicked) {
  		thingToDisplay = <input onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder={this.props.currentKey} autoFocus />
  	} else {
  		thingToDisplay = <p> {this.props.currentKey}</p>
  	}

    return (
      <div onClick={this.handleClick} >
      	{thingToDisplay}
      </div>
    );
  }
}
