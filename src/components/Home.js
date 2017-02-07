import React from 'react';
import {FocusStyleManager} from '@blueprintjs/core';
import Chart from './Chart';
import AddSectionButton from './AddSectionButton';
import SetFilterButton from './SetFilterButton';
import SetDisplayButton from './SetDisplayButton';
import ChooseKey from './ChooseKey';
import ChartInfo from './ChartInfo';
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
    // this.transposeChord = this.transposeChord.bind(this);

  }

  componentDidMount() {
    var that = this
   document.body.addEventListener('keydown', function(e) {
      if(e.key==='`') {
        if(that.props.filter==='EDIT') {
          that.props.actions.setVisibilityFilter('SHOW')
        } else {
          that.props.actions.setVisibilityFilter('EDIT')
        }
      }
    })   
  }

  // transposeChord(chord, key, newKey) {
  //   var sharpScale = ["C", "C#", "D", "D#", "E", "E#", "F#", "G", "G#", "A", "A#", "B"]
  //   var flatScale = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "Cb" ]
  //   // var flatScale = ["Dbb", "Db", "Ebb", "Eb", "Fb", "F", "Gb", "Abb", "Ab","Bbb", "Bb", "Cb"]
  //   var amount
  //   var transposedChord

  //   if(sharpScale.includes(newKey) && sharpScale.includes(key)) {
  //     amount = sharpScale.indexOf(newKey) - sharpScale.indexOf(key)
  //     transposedChord =  chord.replace(/([CDEFGAB]#?)/g,
  //     function(match) {
  //       var i = (sharpScale.indexOf(match) + amount) % sharpScale.length;
  //       return sharpScale[ i < 0 ? i + sharpScale.length : i ];
  //     });
  //     return transposedChord.replace(/(([#][b])|([b][#]))/g, '♮')
  //   }
  //   if(flatScale.includes(newKey) && flatScale.includes(key)) {
  //     amount = flatScale.indexOf(newKey) - flatScale.indexOf(key)
  //     transposedChord =  chord.replace(/([CDEFGAB]b*)/g,
  //     function(match) {
  //       var i = (flatScale.indexOf(match) + amount) % flatScale.length;
  //       return flatScale[ i < 0 ? i + flatScale.length : i ];
  //     });
  //     return transposedChord.replace(/(([#][b])|([b][#]))/g, '♮')
  //   }
  //   if(flatScale.includes(newKey) && sharpScale.includes(key)) {
  //     amount = flatScale.indexOf(newKey) - sharpScale.indexOf(key)
  //     transposedChord =  chord.replace(/([CDEFGAB]#?)/g,
  //     function(match) {
  //       var i = (sharpScale.indexOf(match) + amount) % sharpScale.length;
  //       return flatScale[ i < 0 ? i + flatScale.length : i ];
  //     });
  //     return transposedChord.replace(/(([#][b])|([b][#]))/g, '♮')
  //   }
  //   if(sharpScale.includes(newKey) && flatScale.includes(key)) {
  //     amount = sharpScale.indexOf(newKey) - flatScale.indexOf(key)
  //     transposedChord =  chord.replace(/([CDEFGAB]b*)/g,
  //     function(match) {
  //       var i = (flatScale.indexOf(match) + amount) % flatScale.length;
  //       return sharpScale[ i < 0 ? i + sharpScale.length : i ];
  //     });
  //     return transposedChord.replace(/(([#][b])|([b][#]))/g, '♮')
  //   }
  // }

  handleClick(e) {
    e.preventDefault()
    this.props.actions.markBeatAsClicked(-1, -1, -1)
    this.props.actions.markSectionAsClicked(-1)
  }
        // <SetDisplayButton setChordDisplay={this.props.actions.setChordDisplay} filter ={this.props.filter} display={this.props.display} />
  render() {
    var style;
    if(this.props.filter==='SHOW') {
      style = this.state.styles.showStyle
    } else {
      style = this.state.styles.editStyle
    }
    return (
      <div style={style} onClick={this.handleClick}>
        <ChartInfo title={this.props.title} composer={this.props.composer} arranger={this.props.arranger} setTitle={this.props.actions.setTitle} setComposer={this.props.actions.setComposer} setArranger={this.props.actions.setArranger} filter={this.props.filter} />
        <SetFilterButton setVisibilityFilter={this.props.actions.setVisibilityFilter} filter={this.props.filter} />
        <ChooseKey currentKey={this.props.currentKey} setCurrentKey={this.props.actions.setCurrentKey} transposeAllChords={this.props.actions.transposeAllChords} filter={this.props.filter}/>
        <AddSectionButton addSection={this.props.actions.addSection} filter={this.props.filter}/>
        <Chart sections={this.props.sections} actions={this.props.actions} filter={this.props.filter} currentKey={this.props.currentKey} display={this.props.display} />
        <Favicon url={[icon]} />
      </div>
    );
  }
}
