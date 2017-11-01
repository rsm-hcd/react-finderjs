var Finder = React.createClass({

    getDefaultProps: function () {
        return {
            className: "",
            createItemContent: function (config, item) { return "<span />"; },
        };
    },

    componentDidMount: function () {
        this.node = this.getDOMNode();
        this.renderFinderContent();
    },

    componentDidUpdate: function (prevProps, prevState) {
        this.renderFinderContent();
    },

    render: function () {
        // Don't render anything, using DOM portals
        return <div />;
    },

    renderFinderContent: function (props) {
        // If we received props, use them, otherwise use
        // component props
        props = props || this.props;

        React.renderComponent(
            <div
                className = {props.className}>
                {props.children}
            </div>
        , this.node);
    }
});