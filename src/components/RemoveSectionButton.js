import React from 'react';

export default class RemoveSectionButton extends React.Component {


  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
    this.props.removeSection(this.props.id);
  }

  render() {
    return (
      <div style={{
        display: 'inline-block'
      }}>
        <button onClick={this.handleClick} >
          REMOVE SECTION
        </button>
      </div>
    );
  }
}
