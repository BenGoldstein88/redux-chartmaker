import React from 'react';
import Measure from './Measure';
import MeasureDisplay from './MeasureDisplay';
import SectionName from './SectionName';
import AddMeasureButton from './AddMeasureButton';
import RemoveSectionButton from './RemoveSectionButton';

export default class Section extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	measures: [],
    	name: 'Chorus'
    }

    this.populateMeasures = this.populateMeasures.bind(this);
    this.changeName = this.changeName.bind(this);
    this.addMeasure = this.addMeasure.bind(this);
    this.removeMeasure = this.removeMeasure.bind(this);
  }

  populateMeasures() {
  	var measures = [0, 1, 2, 3, 4, 5, 6, 7];

  	this.setState({
  		measures: measures
  	})
  }

  changeName(name) {
  	this.setState({
  		name: name
  	})
  }

  addMeasure() {
  	var measures = this.state.measures;
  	measures.push(measures.length);
  	this.setState({
  		measures: measures
  	})
  }

  removeMeasure(measureNumber) {
    console.log("measureNumber: ", measureNumber);
  	var measures = this.state.measures;
  	delete measures[measureNumber];

  	var newMeasures = [];
    for(var i = 0; i < measures.length; i++) {
      if(measures[i] !== undefined) {
        newMeasures.push(i);
      }
    }

    console.log("newMeasures: ", newMeasures);
  	this.setState({
  		measures: newMeasures
  	})
    // var clone = measures;
    // clone.splice(measureNumber, 1)
    // console.log("clone: ", clone);



    // for(var i = 0; i < measures.length; i++) {
    //    newMeasures.push(i);
    // }
   //  console.log("newMeasures: ", newMeasures);
   //  this.setState({
   //    measures: newMeasures
   //  })
   //  measures.splice(measureNumber, 1);


  }

  componentDidMount() {
    if(this.state.measures.length < 1) {
      this.populateMeasures();
    }  
  }

  render() {
  	var measures = this.state.measures;
  	var measuresToRender = [];
  	for(var i = 0; i < measures.length; i++) {

  		var measure = <Measure key={i} measureNumber={i} sectionNumber={this.props.sectionNumber} markAsSelected={this.props.markAsSelected} selectedBeatID={this.props.selectedBeatID} getSelectedBeatID={this.props.getSelectedBeatID} removeMeasure={this.removeMeasure}/>
  		measuresToRender.push(measure);
    }

 
    return (
      <div className={'section'}>
      	<SectionName name={this.state.name} changeName={this.changeName} sectionNumber={this.props.sectionNumber} selectedSectionNumber={this.props.selectedSectionNumber} markSectionAsSelected={this.props.markSectionAsSelected}/>
      	{measuresToRender}
        <AddMeasureButton addMeasure={this.addMeasure}/>
        <RemoveSectionButton removeSection={this.props.removeSection} sectionNumber={this.props.sectionNumber}/> 
      </div>
    );
  }
}

