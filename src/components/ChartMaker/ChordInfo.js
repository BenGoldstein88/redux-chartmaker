import React from 'react';

export default class ChordInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRoot: '',
      currentMajorChord: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentRoot !== prevState.currentRoot) {
      this.setState({
        currentMajorChord: this.props.findMajorChord(this.state.currentRoot)
      })
    }
  }

  handleChange(e) {
    e.preventDefault();

    var currentRoot = e.target.value;
    if(!!currentRoot){ 
      var firstLetter = currentRoot[0].toUpperCase();
      var sanitizedCurrentRoot = firstLetter + currentRoot.substring(1, currentRoot.length);

      this.setState({
        currentRoot: sanitizedCurrentRoot
      })
    }
  }

  render() {
    var currentRoot = this.state.currentRoot;
    var currentMajorChord = this.state.currentMajorChord

    return (
      <div className='chord-info'>
        <input type='text' onChange={this.handleChange} />
        <br/>
        {currentRoot}
        <br/>
        Major ({this.state.currentRoot}): {currentMajorChord}
        <br/>
        Minor ({this.state.currentRoot+'m'}): {this.props.makeMinorChord(currentMajorChord)}
        <br/>
        Augmented ({this.state.currentRoot+'+'}): {this.props.makeAugmentedChord(currentMajorChord)}
        <br/>
        Diminished ({this.state.currentRoot+'°'}): {this.props.makeDiminishedChord(currentMajorChord)}
      	

      </div>
    );
  }
}
