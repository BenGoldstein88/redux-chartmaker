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
    this.transposeChord = this.transposeChord.bind(this);

  }
  transposeChord(chord, key, newKey) {
    var sharpScale = ["C", "C#", "D", "D#", "E", "E#", "F#", "G", "G#", "A", "A#", "B"]
    var flatScale = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "Cb" ]
    // var flatScale = ["Dbb", "Db", "Ebb", "Eb", "Fb", "F", "Gb", "Abb", "Ab","Bbb", "Bb", "Cb"]
    var amount
    var transposedChord

    if(sharpScale.includes(newKey) && sharpScale.includes(key)) {
      amount = sharpScale.indexOf(newKey) - sharpScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]#?)/g,
      function(match) {
        var i = (sharpScale.indexOf(match) + amount) % sharpScale.length;
        return sharpScale[ i < 0 ? i + sharpScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
    if(flatScale.includes(newKey) && flatScale.includes(key)) {
      amount = flatScale.indexOf(newKey) - flatScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]b*)/g,
      function(match) {
        var i = (flatScale.indexOf(match) + amount) % flatScale.length;
        return flatScale[ i < 0 ? i + flatScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
    if(flatScale.includes(newKey) && sharpScale.includes(key)) {
      amount = flatScale.indexOf(newKey) - sharpScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]#?)/g,
      function(match) {
        var i = (sharpScale.indexOf(match) + amount) % sharpScale.length;
        return flatScale[ i < 0 ? i + flatScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
    if(sharpScale.includes(newKey) && flatScale.includes(key)) {
      amount = sharpScale.indexOf(newKey) - flatScale.indexOf(key)
      transposedChord =  chord.replace(/([CDEFGAB]b*)/g,
      function(match) {
        var i = (flatScale.indexOf(match) + amount) % flatScale.length;
        return sharpScale[ i < 0 ? i + sharpScale.length : i ];
      });
      return transposedChord.replace(/(([#][b])|([b][#]))/g, '')
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.props.actions.markBeatAsClicked(-1, -1, -1)
    this.props.actions.markSectionAsClicked(-1)
  }
  render() {
    // console.log("this.transposeChord('C/E', 'C', 'C#': ", this.transposeChord('C/E', 'C', 'C#'));
    // console.log("this.transposeChord('F#7/C#', 'B', 'Eb'): ", this.transposeChord('F#7/C#', 'B', 'Eb'));
    // console.log("this.transposeChord('Bbm7/Ab', 'Eb', 'G'): ", this.transposeChord('Bbm7/Ab', 'Eb', 'G'));
    // console.log("this.transposeChord('Ab/C', 'C','F#'): ", this.transposeChord('Ab/C', 'C','F#'));
    // console.log("this.transposeChord('Fmaj9#11', 'D', 'F'): ", this.transposeChord('Fmaj9#11', 'D', 'F'));
    // console.log("this.transposeChord('F', 'F', 'C'): ", this.transposeChord('F', 'F', 'C'));
    // console.log("this.transposeChord('C', 'C', 'F'): ", this.transposeChord('C', 'C', 'F'));
    // console.log("this.transposeChord('Fmaj9#11', 'C', 'F'): ", this.transposeChord('Fmaj9#11', 'C', 'F'));
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
