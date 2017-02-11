import React from 'react';
import axios from 'axios'
export default class SaveButton extends React.Component {


  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
    var that = this
    axios({
      method: 'post',
      url: 'http://localhost:3000/songs',
      data: {
        title: that.props.title,
        composer: that.props.composer,
        arranger: that.props.arranger,
        sections: that.props.sections,
        currentKey: that.props.currentKey
      }
    })
    .then(function(response) {
    	console.log("Song Saved!", response)
    })
    .catch(function(error) {
     	console.log('There was an error!', error)
    })
  }

  render() {
    return (
      <div>
      	<button disabled={true} onClick={this.handleClick}>
      		SAVE 
      	</button>
      </div>
    );
  }
}
