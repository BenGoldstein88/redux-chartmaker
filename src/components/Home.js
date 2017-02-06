import React from 'react';
import {FocusStyleManager} from '@blueprintjs/core';
import Chart from './Chart';
import AddSectionButton from './AddSectionButton';
import SetFilterButton from './SetFilterButton';
import SetDisplayButton from './SetDisplayButton';
import ChooseKey from './ChooseKey';
import Favicon from 'react-favicon'
import icon from '../favicon.ico'

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      styles: {
        editStyle: {
          padding: '10px',
          width: '100%',
          height: '100%',
          position: 'relative'
        },
        showStyle: {
          padding: '10px',
          width: '100%',
          height: '100%',
          position: 'relative'
        }
      }
    }
    FocusStyleManager.onlyShowFocusOnTabs();

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault()
    this.props.actions.markBeatAsClicked(-1, -1, -1)
    this.props.actions.markSectionAsClicked(-1)
  }
  render() {
    var style;
    if(this.props.filter==='SHOW') {
      style = this.state.styles.showStyle
    } else {
      style = this.state.styles.editStyle
    }
    return (
      <div style={style} onClick={this.handleClick}>
        <SetFilterButton setVisibilityFilter={this.props.actions.setVisibilityFilter} filter={this.props.filter} />
        <SetDisplayButton setChordDisplay={this.props.actions.setChordDisplay} filter ={this.props.filter} display={this.props.display} />
        <ChooseKey currentKey={this.props.currentKey} setCurrentKey={this.props.actions.setCurrentKey}/>
        <AddSectionButton addSection={this.props.actions.addSection} filter={this.props.filter}/>
        <Chart sections={this.props.sections} actions={this.props.actions} filter={this.props.filter} currentKey={this.props.currentKey} display={this.props.display} />
        <Favicon url={[icon]} />
      </div>
    );
  }
}
