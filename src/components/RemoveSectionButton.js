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
        <button className={'remove-section-button'}onClick={this.handleClick} >
          <p style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)'
          }}>REMOVE SECTION</p>
        </button>
      </div>
    );
  }
}
