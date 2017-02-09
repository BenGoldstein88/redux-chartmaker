import React from 'react';

export default class SectionMultiplier extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
  	var className = 'section-multiplier-'
  	var pClassName = 'section-multiplier-p-'
  	if(this.props.filter==='EDIT') {
  		className += 'edit'
  		pClassName += 'edit'
  	} else {
  		className += 'show'
  		pClassName += 'show'
  	}
    return (
      <div className={className}>
      	<p className={pClassName}>x{this.props.multiplier}</p>
      </div>
    );
  }
}
