import React from 'react';
import ChordInfo from './ChordInfo';

export default class ChordMaker extends React.Component {

  constructor(props) {
    super(props);


    this.findMajorChord = this.findMajorChord.bind(this);
    this.flatNote = this.flatNote.bind(this);
    this.sharpNote = this.sharpNote.bind(this);
    this.makeMinorChord = this.makeMinorChord.bind(this);
    this.makeAugmentedChord = this.makeAugmentedChord.bind(this);
    this.makeDiminishedChord = this.makeDiminishedChord.bind(this);
    this.addMajorSevenToChord = this.addMajorSevenToChord.bind(this);
    this.addDominantSevenToChord = this.addDominantSevenToChord.bind(this);
    this.addDiminishedSevenToChord = this.addDiminishedSevenToChord.bind(this);
    this.addNineToChord = this.addNineToChord.bind(this);
    this.addSixToChord = this.addSixToChord.bind(this);
  }

  flatNote(note) {
  	var flatNote;
  	if(note.length === 1) {
  		flatNote = note + '♭'
  	} else if(note[note.length-1]==='b' || note[note.length-1]==='♭'){
  		flatNote = note.substring(0,1) +'𝄫'
    } else {
      flatNote = note.substring(0,1);
    }
  	return flatNote;

  }

  sharpNote(note) {
  	var sharpNote;
  	if(note.length === 1) {
  		sharpNote = note + '♯'
  	} else if(note[note.length-1]==='#' || note[note.length-1]==='♯'){
  		sharpNote = note.substring(0,1) + '𝄪';
  	} else {
  		sharpNote = note.substring(0,1);
  	}
  	return sharpNote;

  }

  makeMinorChord(majorChord) {
  	if(!majorChord) { return false;}
  	var majorChordArray = majorChord.split(' ');
  	var third = majorChordArray[1];
  	var flatThird = this.flatNote(third);
  	majorChordArray[1] = flatThird;
  	var minorChord = majorChordArray.join(' ');
  	return minorChord;

  }

  makeAugmentedChord(majorChord) {
  	if(!majorChord) { return false;}
  	var majorChordArray = majorChord.split(' ');
  	var fifth = majorChordArray[2];
  	var sharpFifth = this.sharpNote(fifth);
  	majorChordArray[2] = sharpFifth;
  	var augmentedChord = majorChordArray.join(' ');
  	return augmentedChord;

  }

  makeDiminishedChord(majorChord) {
  	if(!majorChord) { return false;}
  	var majorChordArray = majorChord.split(' ');
  	var fifth = majorChordArray[2];
  	var flatFifth = this.flatNote(fifth);
  	majorChordArray[2] = flatFifth;
    var third = majorChordArray[1];
    var flatThird = this.flatNote(third);
    majorChordArray[1] = flatThird;
  	var diminishedChord = majorChordArray.join(' ');
  	return diminishedChord;

  }

  addMajorSevenToChord(chord) {
  	return false;
  }

  addDominantSevenToChord(chord) {
  	return false;
  }

  addDiminishedSevenToChord(chord) {
  	return false;
  }

  addNineToChord(chord) {
  	return false;
  }

  addSixToChord(chord) {
  	return false;
  }

  findMajorChord(root) {
  	var majorChord;
  	switch(root) {
  		case 'C':
  			majorChord = 'C E G';
  			break;
  		case 'C#':
  			majorChord = 'C♯ E♯ G♯';
  			break
  		case 'Db':
  			majorChord = 'D♭ F A♭';
  			break;
  		case 'D':
  			majorChord = 'D F♯ A';
  			break;
  		case 'D#':
  			majorChord = 'D♯ F𝄪 A♯';
  			break
      case 'Eb':
        majorChord = 'E♭ G B♭';
        break;
  		case 'E':
  			majorChord = 'E G♯ B';
  			break;
  		case 'F':
  			majorChord = 'F A C';
  			break;
  		case 'F#':
  			majorChord = 'F♯ A♯ C♯';
  			break;
  		case 'Gb':
  			majorChord = 'G♭ B♭ D♭'
  			break;
  		case 'G':
  			majorChord = 'G B D';
  			break;
  		case 'G#':
  			majorChord = 'G♯ B♯ D♯';
  			break;
  		case 'Ab':
  			majorChord = 'A♭ C E♭';
  			break;
  		case 'A':
  			majorChord = 'A C♯ E';
  			break;
  		case 'A#':
  			majorChord = 'A♯ C𝄪 E♯';
  			break;
  		case 'Bb':
  			majorChord = 'B♭ D F';
  			break;
  		case 'B':
  			majorChord = 'B D♯ F♯';
  			break;
  		default:
  			!majorChord;
  	}
  	return majorChord;
  }



  render() {
    return (
      <div>
        <ChordInfo findMajorChord={this.findMajorChord} makeMinorChord={this.makeMinorChord} makeAugmentedChord={this.makeAugmentedChord} makeDiminishedChord={this.makeDiminishedChord} />
      </div>
    );
  }
}
