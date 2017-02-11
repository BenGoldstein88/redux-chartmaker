import React from 'react';


export default class DuplicateSectionButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.addSection(0, this.props.sectionName, true, this.props.sectionId);
  }

  render() {
    return (
      <div>
      	<button className={'duplicate-section-button'} onClick={this.handleClick} >
      		+ 
      	</button>
      </div>
    );
  }
}