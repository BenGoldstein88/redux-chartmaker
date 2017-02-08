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
    var thingToDisplay = <div id={'slide'}>
        <AddMeasureButton className={'section-toolbar-button'} sectionId={this.props.sectionId} addMeasure={this.props.addMeasure} />
        <MoveSectionUpButton className={'section-toolbar-button'} moveSectionUp={this.props.moveSectionUp} sectionId={this.props.sectionId}/>
        <MoveSectionDownButton className={'section-toolbar-button'} moveSectionDown={this.props.moveSectionDown} sectionId={this.props.sectionId}/>
        <RemoveSectionButton className={'section-toolbar-button'} removeSection={this.props.removeSection} id={this.props.id} />
      </div>
    if(this.props.filter==='SHOW') {
      thingToDisplay = null
    }

    return (
      <div style={{
      	display: 'inline-block',
        position: 'absolute',
        top: '-10px',
        right: '-68%',
        width: '80%',
        margin: '0 auto',
        height: '25px',
        transform: 'translate(-50%, 0)'
      }} >
        {thingToDisplay}
      </div>
    );
  }
}
