# AUTO GENERATED FILE - DO NOT EDIT

export dasheditor

"""
    dasheditor(;kwargs...)

A DashEditor component.
EditorComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataSources` (Dict; required): The layout of the  components displayed inside the grid.
- `fig` (Dict; optional): The layout of the  components displayed inside the grid.
"""
function dasheditor(; kwargs...)
        available_props = Symbol[:id, :dataSources, :fig]
        wild_props = Symbol[]
        return Component("dasheditor", "DashEditor", "dash_editor", available_props, wild_props; kwargs...)
end

