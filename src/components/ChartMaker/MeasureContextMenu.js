import React from 'react';

export default class MeasureContextMenu extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();

  	this.props.removeMeasure(this.props.measureNumber);
  	this.props.resetRightClick(this.props.measureNumber);
  }

  render() {
    return (
      <div className={'measure-context-menu'} onClick={this.handleClick} >
      	Delete
      </div>
    );
  }
}
