import React from 'react';

export default class RemoveSectionButton extends React.Component {


  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.removeSection(this.props.sectionNumber);
  }

  render() {
    return (
      <div className={'remove-section-button'} onClick={this.handleClick}>
      	-
      </div>
    );
  }
}
