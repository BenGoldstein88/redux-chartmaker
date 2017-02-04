import React from 'react';
import RemoveSectionButton from './RemoveSectionButton'
import AddMeasureButton from './AddMeasureButton';
import MoveSectionUpButton from './MoveSectionUpButton';
import MoveSectionDownButton from './MoveSectionDownButton';
export default class SectionButtonToolbar extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      	display: 'inline-block',
        position: 'absolute',
        bottom: '0',
        left: '0'
      }}>
        <AddMeasureButton sectionId={this.props.sectionId} addMeasure={this.props.addMeasure} />
        <MoveSectionUpButton moveSectionUp={this.props.moveSectionUp} sectionId={this.props.sectionId}/>
        <MoveSectionDownButton moveSectionDown={this.props.moveSectionDown} sectionId={this.props.sectionId}/>
      	<RemoveSectionButton removeSection={this.props.removeSection} id={this.props.id} />
      </div>
    );
  }
}
