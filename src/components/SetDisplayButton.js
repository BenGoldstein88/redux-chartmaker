import React from 'react';

export default class SetDisplayButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	if(this.props.display === 'CHORD'){
  		this.props.setChordDisplay('NUMBER')
  	} else {
  		this.props.setChordDisplay('CHORD')
  	}

  }

  render() {
  	var buttonString = ''
  	if(this.props.display === 'CHORD') {
  		buttonString = 'NUMBER'
  	} else {
  		buttonString = 'CHORD'
  	}
    return (
      <div>
      	<button onClick={this.handleClick} >
      		{buttonString}
      	</button>
      </div>
    );
  }
}