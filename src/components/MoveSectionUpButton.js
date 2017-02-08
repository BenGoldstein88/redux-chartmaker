import React from 'react';

export default class MoveSectionUpButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
    this.props.moveSectionUp(this.props.sectionId)

  }

  render() {
    return (
      <div style={{
      	display: 'inline-block'
      }}>
      	<button style={{
          border: 'none',
          backgroundColor: 'white',
          color: 'darkblue',
          fontSize: '1.2em',
          height: '25px',
          width: '25px',
          margin: '2px'

        }}onClick={this.handleClick} >
      		<p style={{
            position: 'absolute',
            top: '-40%'
          }}>↑</p>
      	</button>
      </div>
    );
  }
}
