import React from 'react';
import RootDisplay from './RootDisplay';
import Modal from 'react-bootstrap'
export default class ChooseKey extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
    	clicked: false,
    	styles: {
    		editStyle: {
    			position: 'absolute',
    			top: '5px',
    			left: '5px',
    			border: '1px solid black',
    			borderRadius: '50%',
    			height: '50px',
    			width: '50px',
    			textAlign: 'center',
          cursor: 'alias'
    		},
    		showStyle: {
    			position: 'absolute',
    			top: '5px',
    			left: '5px',
    			border: '1px solid black',
    			borderRadius: '50%',
    			height: '50px',
    			width: '50px',
    			textAlign: 'center'

    		}
    	}
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.setState({
  		clicked: !this.state.clicked
  	})
  }

  handleKeyPress(e) {
  	if(e.key === 'Enter') {
  		this.setState({
  			clicked: false
  		})
  	}
  }

  hideModal() {
  	this.setState({
  		clicked: false
  	})
  }

  render() {
  	var thingToDisplay
  	var style
  	if(this.props.filter==='EDIT') {
  		style = this.state.styles.editStyle
  	} else {
  		style = this.state.styles.showStyle
  	}
  	if(this.state.clicked) {
  		thingToDisplay = <RootDisplay currentKey={this.props.currentKey} setCurrentKey={this.props.setCurrentKey} transposeAllChords={this.props.transposeAllChords} className={'root-display'}/>
  	} else {
  		thingToDisplay = <div style={style}> <p className={'current-key-p'} >{this.props.currentKey}</p></div>
  	}

    return (
      <div onClick={this.handleClick}>
      	{thingToDisplay}
      </div>
    );
  }
}
