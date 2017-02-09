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
      	<button className={'move-section-up-button'} onClick={this.handleClick} >
      		<p style={{
            position: 'absolute',
            top: '-40%'
          }}>↑</p>
      	</button>
      </div>
    );
  }
}
