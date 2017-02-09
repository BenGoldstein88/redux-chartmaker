import React from 'react';

export default class MoveSectionDownButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault()
    this.props.moveSectionDown(this.props.sectionId)
  }
  render() {
    return (
      <div style={{
      	display: 'inline-block'
      }}>
      	<button className={'move-section-down-button'} onClick={this.handleClick}>
      		<p style={{
            position: 'absolute',
            top: '-30%'
          }}>↓</p>
      	</button>
      </div>
    );
  }
}
