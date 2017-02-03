import React from 'react';

export default class AddMeasureButton extends React.Component {


  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	this.props.addMeasure();
  }

  render() {
    return (
      <div className={'add-measure-button'} onClick={this.handleClick }>
      	+      	
      </div>
    );
  }
}
