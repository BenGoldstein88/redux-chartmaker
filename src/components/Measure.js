import React from 'react';
import RemoveMeasureButton from './RemoveMeasureButton';

export default class Measure extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	height: '50px',
      	width: '50px',
      	border: '1px solid pink',
      	display: 'inline-block'
      }}>
      	m{this.props.id}
      	<br />
      	<RemoveMeasureButton removeMeasure={this.props.removeMeasure} id={this.props.id} sectionId={this.props.sectionId} />
      </div>
    );
  }
}
