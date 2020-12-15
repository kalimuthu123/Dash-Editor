# AUTO GENERATED FILE - DO NOT EDIT

dashEditor <- function(id=NULL, dataSources=NULL, fig=NULL) {
    
    props <- list(id=id, dataSources=dataSources, fig=fig)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashEditor',
        namespace = 'dash_editor',
        propNames = c('id', 'dataSources', 'fig'),
        package = 'dashEditor'
        )

    structure(component, class = c('dash_component', 'list'))
}
