import React from 'react';

export default class RemoveMeasureButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.removeMeasure(this.props.sectionId, this.props.id)
  }

  render() {
    return (
      <div>
      	<button onClick={this.handleClick} >
      		--
      	</button>
      </div>
    );
  }
}
