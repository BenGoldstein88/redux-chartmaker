import React from 'react';

export default class AddMeasureButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.addMeasure(this.props.sectionId)
  }

  render() {
    return (
      <div>
      	<button onClick={this.handleClick} >
      		+
      	</button>
      </div>
    );
  }
}
