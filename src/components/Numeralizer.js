import React from 'react';

export default class Numeralizer extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  getNumber(key, note) {
  	switch(key) {
  		var number;
  		case 'C':
  			switch(note) {
		  		case 'C':
		  			number =  '1'
		  		case 'D':
		  			number =  '2'
		  		case 'E':
		  			number =  '3'
		  		case 'F':
		  			number =  '4'
		  		case 'G':
		  			number =  '5'
		  		case 'A':
		  			number =  '6'
		  		case 'B':
		  			number =  '7'
		  		case 'D♭':
		  			number =  '2♭'
		  		case 'E♭':
		  			number =  '3♭'
		  		case 'G♭':
		  			number =  '5♭'
		  		case 'A♭':
		  			number =  '6♭'
		  		case 'B♭':
		  			number =  '7♭'
		   		case 'C♯':
		   			number =  '1♯'
		  		case 'D♯':
		  			number =  '2♯'
		  		case 'F♯':
		  			number =  '4♯'
		  		case 'G♯':
		  			number =  '5♯'
		  		case 'A♯':
		  			number =  '6♯'
  			}
  			return number;
  		case 'D':
  		case 'E':
  		case 'F':
  		case 'G':
  		case 'A':
  		case 'B':
  		case 'C#':
  		case 'D#':
  		case 'F#':
  		case 'G#':
  		case 'A#':
   		case 'C♯':
  		case 'D♯':
  		case 'F♯':
  		case 'G♯':
  		case 'A♯':
  		case 'Db':
  		case 'Eb':
  		case 'Gb':
  		case 'Ab':
  		case 'Bb':
  		case 'D♭':
  		case 'E♭':
  		case 'G♭':
  		case 'A♭':
  		case 'B♭':
  		default:
  			return '-1'
  	}
  }

  render() {
    return (
      <div></div>
    );
  }
}
