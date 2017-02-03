import React from 'react';
import Section from './Section';
import SectionDisplay from './SectionDisplay';
import AddSectionButton from './AddSectionButton';
import ChordMaker from './ChordMaker';

export default class ChartMaker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	sections: [],
      selectedBeatID: '-1',
      selectedSectionNumber: -1,
      reset: false
    }

    this.addSection = this.addSection.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.markAsSelected = this.markAsSelected.bind(this);
    this.getSelectedBeatID = this.getSelectedBeatID.bind(this);
    this.toggleReset = this.toggleReset.bind(this);
    this.resetClicked = this.resetClicked.bind(this);
    this.markSectionAsSelected = this.markSectionAsSelected.bind(this);
    this.removeSection = this.removeSection.bind(this);
  }

  addSection(section) {
    var sections = this.state.sections;

    sections.push(section);

    this.setState({
      sections: sections
    })

  }

  markAsSelected(beatID) {

    this.setState({
      selectedBeatID: beatID
    })

  }

  markSectionAsSelected(sectionNumber) {
    this.setState({
      selectedSectionNumber: sectionNumber
    })
  }

  getSelectedBeatID() {
    return this.state.selectedBeatID;
  }

  toggleReset() {
    this.setState({
      reset: !this.state.reset
    })
  }

  resetClicked() {
    this.setState({
      selectedBeatID: '-1',
      selectedSectionNumber: -1
    })
  }

  removeSection(sectionNumber) {
    var sections = this.state.sections;
    console.log("sections: ", sections);
    // sections.splice(sectionNumber);
    // console.log("sections: ", sections);
    // this.setState({
    //   sections: sections
    // })
    var newSections = [];
    delete sections[sectionNumber];
    console.log("sections: ", sections);
    for(var i = 0; i < sections.length; i++) {
      if(!!sections[i]) {
        newSections.push(sections[i]);
      }
    }
    console.log("newSections: ", newSections);

    this.setState({
      sections: newSections
    })
  }



  render() {
    var sections = this.state.sections;
    var sectionsToRender = [];

    for(var i = 0; i < sections.length; i++) {
      if(!!sections[i]){
       var section = <Section key={i} name={sections[i].name} numMeasures={sections[i].numMeasures} sectionNumber={i} removeSection={this.removeSection} markAsSelected={this.markAsSelected} selectedBeatID={this.state.selectedBeatID} getSelectedBeatID={this.getSelectedBeatID} selectedSectionNumber={this.state.selectedSectionNumber} markSectionAsSelected={this.markSectionAsSelected} reset={this.state.reset} />
        sectionsToRender.push(section);
      }
    }

    return (
      <div onClick={this.resetClicked} className={'chart-maker'} >
      	<AddSectionButton addSection={this.addSection}/>
      	<SectionDisplay sections={sectionsToRender} />
        <ChordMaker />
      </div>
    );
  }
}

// test
