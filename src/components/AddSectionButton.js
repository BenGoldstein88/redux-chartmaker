import React from 'react';


export default class AddSectionButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.addSection();
  }

  render() {
    return (
      <div>
      	<button onClick={this.handleClick} >
      		ADD SECTION
      	</button>
      </div>
    );
  }
}
