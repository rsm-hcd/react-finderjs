import React, { Component } from 'react';
import * as Finder from "finderjs" ;
import * as uuidv4 from "uuid/v4";

const defaultProps = {
    className: "",
    createItemContent: undefined,
    data: [],
    onItemSelected: null,
    onLeafSelected: null,
    onColumnCreated: null,
}

class ReactFinder extends Component {

    constructor(props) {
        super(props);

        this._componentId = uuidv4.default();

        this._initializeFinder = this._initializeFinder.bind(this);
    }

    componentDidMount() {
        this._initializeFinder();
    }

    componentDidUpdate(prevProps, prevState) {
        this._initializeFinder();
    }

    render() {
        return (
            <div
                className = {this.props.className}
                dangerouslySetInnerHTML = {{
                    __html: `<div id="${this._componentId}"></div>`
                }}
            />
        );
    }

    _initializeFinder() {
        if (this._container == undefined) {
            this._container = document.getElementById(this._componentId);
        }
        if (this._finder == undefined) {
            this._finder = Finder.default(this._container, this.props.data, {
                className: this.props.className,
                createItemContent: this.props.createItemContent,
            });
        }
    }
};

ReactFinder.defaultProps = defaultProps;
export default ReactFinder;