import React from 'react';
import {FocusStyleManager} from '@blueprintjs/core';
import Chart from './Chart';
import AddSectionButton from './AddSectionButton';
import SetFilterButton from './SetFilterButton';
import SetDisplayButton from './SetDisplayButton';
import ChooseKey from './ChooseKey';
import ChartInfo from './ChartInfo';
import SaveButton from './SaveButton';
import Favicon from 'react-favicon'
import icon from '../favicon.ico'

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shifted: false,
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
    this.resetFormFields = this.resetFormFields.bind(this);
    // this.transposeChord = this.transposeChord.bind(this);

  }

  componentDidMount() {
    var that = this
   document.body.addEventListener('keydown', function(e) {
      var pressed = ''
      if(e.key==='`') {
        if(that.props.filter==='EDIT') {
          that.resetFormFields()
          that.props.actions.setVisibilityFilter('SHOW')
        } else {
          that.props.actions.setVisibilityFilter('EDIT')
        }
      }
      if(e.key==='Shift') {
        that.setState({
          shifted: true
        })
      }
      if(e.key==='Enter') {
        if(that.state.shifted) {
          that.props.actions.addSection()
        }
      }

    })
   document.body.addEventListener('keyup', function(e) {
      var pressed = ''
      if(e.key==='Shift') {
        that.setState({
          shifted: false
        })
      }

    })    
  }

  resetFormFields() {
    this.props.actions.markBeatAsClicked(-1, -1, -1)
    this.props.actions.markSectionAsClicked(-1)
    this.props.actions.markChartInfoAsClicked('NONE')
    this.props.actions.markMultiplierAsClicked(-1)    
  }

  handleClick(e) {
    e.preventDefault()
    this.resetFormFields()
  }
        // <SetDisplayButton setChordDisplay={this.props.actions.setChordDisplay} filter ={this.props.filter} display={this.props.display} />
  render() {
    var style;
    var addSectionButton
    if(this.props.filter==='SHOW') {
      style = this.state.styles.showStyle
    } else {
      style = this.state.styles.editStyle
      addSectionButton = <AddSectionButton addSection={this.props.actions.addSection} filter={this.props.filter}/>
    }

    return (
      <div style={style} onClick={this.handleClick}>
        <ChartInfo title={this.props.title} composer={this.props.composer} arranger={this.props.arranger} setTitle={this.props.actions.setTitle} setComposer={this.props.actions.setComposer} setArranger={this.props.actions.setArranger} filter={this.props.filter} currentChartInfo={this.props.currentChartInfo} markBeatAsClicked={this.props.actions.markBeatAsClicked} markSectionAsClicked={this.props.actions.markSectionAsClicked} markChartInfoAsClicked={this.props.actions.markChartInfoAsClicked} markMultiplierAsClicked={this.props.actions.markMultiplierAsClicked} />
        <SetFilterButton setVisibilityFilter={this.props.actions.setVisibilityFilter} filter={this.props.filter} resetFormFields={this.resetFormFields} />
        <ChooseKey currentKey={this.props.currentKey} setCurrentKey={this.props.actions.setCurrentKey} transposeAllChords={this.props.actions.transposeAllChords} filter={this.props.filter}/>
        {addSectionButton}
        <Chart sections={this.props.sections} actions={this.props.actions} filter={this.props.filter} currentKey={this.props.currentKey} display={this.props.display} />
        <SaveButton title={this.props.title} composer={this.props.composer} arranger={this.props.arranger} sections={this.props.sections} currentKey={this.props.currentKey}/>
        <Favicon url={[icon]} />
      </div>
    );
  }
}
