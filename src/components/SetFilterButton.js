import React from 'react';

export default class SetFilterButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	if(this.props.filter === 'EDIT'){
  		this.props.setVisibilityFilter('SHOW')
  	} else {
  		this.props.setVisibilityFilter('EDIT')
  	}

  }

  render() {
  	var buttonString = ''
  	if(this.props.filter === 'EDIT') {
  		buttonString = 'SHOW'
  	} else {
  		buttonString = 'EDIT'
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
