import React from 'react';
import {FocusStyleManager} from '@blueprintjs/core';
// import Chart from './Chart'
import Chart from './Chart';
import AddSectionButton from './AddSectionButton'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    FocusStyleManager.onlyShowFocusOnTabs();

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault()
    this.props.actions.markBeatAsClicked(-1, -1, -1)
    this.props.actions.markSectionAsClicked(-1)
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <AddSectionButton addSection={this.props.actions.addSection} />
        <Chart sections={this.props.sections} actions={this.props.actions} />
      </div>
    );
  }
}
