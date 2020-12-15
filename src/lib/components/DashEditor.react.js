import React, {Component} from 'react';
import PropTypes from 'prop-types';
import plotly from 'plotly.js/dist/plotly';
import PlotlyEditor from 'react-chart-editor';
import 'react-chart-editor/lib/react-chart-editor.css';



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
	    this.state = {
	    	data: [],
            layout: {}, 
            frames: []
	    };
	  }

	componentWillMount() {
         this.setState({ data : this.props.fig.data }); 
         this.setState({ layout : this.props.fig.layout }); 
         this.setState({ frames : this.props.fig.frames }); 
       // this.makeditable();            
    }

    // static getDerivedStateFromProps(props, current_state) {
    shouldComponentUpdate(nextProps, nextState) {
       //console.log("props", nextProps);
       //console.log("current_state", nextState);
       let figure={ data : nextState.data , layout : nextState.layout , frames : nextState.frames }
       //console.log("figure", figure);
       this.props.setProps({ fig : figure });
       return true;
    }

  
    render() {
        const {id, dataSources, setProps, fig} = this.props;
        const dataSourceOptions = Object.keys(this.props.dataSources).map((name) => ({
		  value: name,
		  label: name,
		}));
        let myAttr = {'figure': JSON.stringify(this.props.fig) }
        //console.log("props",this.props)
        //console.log("stats",this.state)
        return (
            <div id={id} className="dashcharteditor"  {...myAttr} >
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
     * The layout of the  components displayed inside the grid.
     */
    dataSources :PropTypes.object.isRequired,

    /**
     * The layout of the  components displayed inside the grid.
     */
    fig : PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
