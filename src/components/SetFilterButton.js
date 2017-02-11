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
      this.props.resetFormFields()
  		this.props.setVisibilityFilter('SHOW')
  	} else {
      this.props.resetFormFields()
  		this.props.setVisibilityFilter('EDIT')
  	}

  }

  render() {
  	var buttonString = ''
    var className=''
  	if(this.props.filter === 'EDIT') {
  		buttonString = 'SHOW'
      className = 'set-filter-button-edit'
  	} else {
  		buttonString = 'EDIT'
      className = 'set-filter-button-show'
  	}
    return (
      <div>
      	<button className={className} onClick={this.handleClick} >
      		{buttonString}
      	</button>
      </div>
    );
  }
}
