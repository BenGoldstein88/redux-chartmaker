import React from 'react';
import Measure from './Measure';

export default class MeasureDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'measure-display'} >
      	{this.props.measures}
      </div>
    );
  }
}
