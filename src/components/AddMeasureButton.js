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
      <div style={{
        display: 'inline-block'
      }}>
      	<button className={'add-measure-button'} onClick={this.handleClick} >
      		<p style={{
            position: 'absolute',
            top: '20%',
            left: '22.5%',
            transform: 'translate(-50%, -50%)'
          }}>ADD MEASURE</p>
      	</button>
      </div>
    );
  }
}
