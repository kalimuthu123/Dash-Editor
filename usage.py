import dash_editor
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
data = {
  "col1": [1, 2, 3], 
  "col2": [4, 3, 2], 
  "col3": [17, 13, 9],
  "col4": [17, 13, 9],
  "col5": [1, 1, 9]
};
figure={'data': [], 'layout': {'xaxis': {'range': [-1, 6], 'autorange': True}, 'yaxis': {'range': [-1, 4], 'autorange': True}, 'autosize': True, 'mapbox': {'style': 'open-street-map'}}, 'frames': []}
app.layout = html.Div([
    dash_editor.DashEditor(
        id='input',
        dataSources= data,
        fig=figure
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'fig')])
def display_output(value):
    print(value)
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
