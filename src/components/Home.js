import React from 'react';
import {FocusStyleManager} from '@blueprintjs/core';
// import Chart from './Chart'
import Chart from './Chart';
import AddSectionButton from './AddSectionButton'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    FocusStyleManager.onlyShowFocusOnTabs();

  }


  render() {
  console.log("this: ", this);   
    return (
      <div>
        HOME
        <AddSectionButton addSection={this.props.actions.addSection} />
        <Chart sections={this.props.sections} actions={this.props.actions} />
      </div>
    );
  }
}
