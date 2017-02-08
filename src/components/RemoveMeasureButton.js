import React from 'react';

export default class RemoveMeasureButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	this.props.removeMeasure(this.props.sectionId, this.props.id)
  }

  render() {
    var thingToDisplay = <button style={{
      border: 'none',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '10px',
      fontWeight: 'bold',
      margin: '0 auto'
    }} onClick={this.handleClick} >
          DELETE
        </button>
    if(this.props.filter==='SHOW') {
      thingToDisplay = null
    }

    return (
      <div style={{
        width: '25%',
        margin: '0 auto',
        marginBottom: '2px'
      }}>
        {thingToDisplay}
      </div>
    );
  }
}
