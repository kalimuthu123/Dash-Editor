import React, {Component} from 'react';
import PropTypes from 'prop-types';
import plotly from 'plotly.js/dist/plotly';
import PlotlyEditor from 'react-chart-editor';
import 'react-chart-editor/lib/react-chart-editor.css';


const dataSources = {
  col1: [1, 2, 3], // eslint-disable-line no-magic-numbers
  col2: [4, 3, 2], // eslint-disable-line no-magic-numbers
  col3: [17, 13, 9], // eslint-disable-line no-magic-numbers
};

const dataSourceOptions = Object.keys(dataSources).map((name) => ({
  value: name,
  label: name,
}));

const config = {editable: true};

/**
 * EditorComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashEditor extends Component {

	 constructor() {
	    super();
	    this.state = {data: [], layout: {}, frames: []};
	  }

    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id} className="dashcharteditor">
		        <PlotlyEditor
		          data={this.state.data}
		          layout={this.state.layout}
		          config={config}
		          frames={this.state.frames}
		          dataSources={dataSources}
		          dataSourceOptions={dataSourceOptions}
		          plotly={plotly}
		          onUpdate={(data, layout, frames) => this.setState({data, layout, frames})}
		          useResizeHandler
		          debug
		          advancedTraceTypeSelector
		        />
            </div>
        );
    }
}

DashEditor.defaultProps = {};

DashEditor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
