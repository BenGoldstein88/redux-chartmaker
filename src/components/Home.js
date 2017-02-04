import React from 'react';
import {FocusStyleManager} from '@blueprintjs/core';
// import Chart from './Chart'
import Chart from './Chart';
import AddSectionButton from './AddSectionButton';
import SetFilterButton from './SetFilterButton';

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
        <SetFilterButton setVisibilityFilter={this.props.actions.setVisibilityFilter} filter={this.props.filter} />
        <AddSectionButton addSection={this.props.actions.addSection} filter={this.props.filter}/>
        <Chart sections={this.props.sections} actions={this.props.actions} filter={this.props.filter} />
      </div>
    );
  }
}
