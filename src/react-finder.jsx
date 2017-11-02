import * as Finder from "finderjs" ;
import * as uuidv4 from "uuid/v4";

const defaultProps = {
    container: undefined,
    data: [],
    options: {
        className: "",
        createItemContent: function (config, item) { return "<span />"; },
    }
}

class ReactFinder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            componentId: uuidv4(),
        };
    }

    componentDidMount() {
        //this.node = this.getDOMNode();
        //this.renderFinderContent();
    }

    componentDidUpdate(prevProps, prevState) {
        //this.renderFinderContent();
    }

    render() {
        return (
            <div
                className = {this.props.className}
                dangerouslySetInnerHTML = {{
                    __html: `<div id="${this.state.componentId}"></div>`
                }}
            />
        );
    }
};

ReactFinder.defaultProps = defaultProps;
export default ReactFinder;