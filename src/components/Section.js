import React from 'react';
import RemoveSectionButton from './RemoveSectionButton'

export default class Section extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	height: '100px',
      	width: '100px',
      	border: '1px solid blue'
      }}>
        {this.props.id}
      	<RemoveSectionButton removeSection={this.props.removeSection} id={this.props.id} />
        
      </div>
    );
  }
}
