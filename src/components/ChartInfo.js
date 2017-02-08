import React from 'react';
import TitleDisplay from './TitleDisplay';
import ComposerDisplay from './ComposerDisplay';
import ArrangerDisplay from './ArrangerDisplay';

export default class ChartInfo extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
    	styles: {
    		editStyle: {
    			margin: '0 auto'
    		},
    		showStyle: {
    			margin: '0 auto'
    		}
    	}
    }
  }

  render() {
  	var style
  	if(this.props.filter==='EDIT') {
  		style = this.state.styles.editStyle
  	} else {
  		style = this.state.styles.showStyle
  	}
    return (
      <div style={style}>
      	<TitleDisplay title={this.props.title} setTitle={this.props.setTitle} filter={this.props.filter} currentChartInfo={this.props.currentChartInfo} markChartInfoAsClicked={this.props.markChartInfoAsClicked}/>
      	<ComposerDisplay composer={this.props.composer} setComposer={this.props.setComposer} filter={this.props.filter} currentChartInfo={this.props.currentChartInfo} markChartInfoAsClicked={this.props.markChartInfoAsClicked}/>
      	<ArrangerDisplay arranger={this.props.arranger} setArranger={this.props.setArranger} filter={this.props.filter} currentChartInfo={this.props.currentChartInfo} markChartInfoAsClicked={this.props.markChartInfoAsClicked}/>
      </div>
    );
  }
}
