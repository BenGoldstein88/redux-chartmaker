import React from 'react';

export default class SectionDisplay extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className={'section-display'}>
      	{this.props.sections}
      </div>
    );
  }
}
