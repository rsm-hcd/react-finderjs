import React, { Component } from 'react';
import bindAll from 'bind-all';
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
        this._finder = undefined;

        bindAll(this);
    }

    componentDidMount() {
        this._initializeFinder();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this._finder = undefined;
        }
        this._initializeFinder();
    }

    render() {
        var className = "c-finder ";

        if (this.props.className != undefined) {
            className += this.props.className
        }

        if (this._finder == undefined) {
            return (<div />);
        }

        return (
            <div
                className = {className}
                dangerouslySetInnerHTML = {{
                    __html: `<div id="${this._componentId}"></div>`
                }}
            />
        );
    }

    // --------------
    // Public Methods
    // --------------

    createColumn(item) {
        if (this._finder == undefined || item == undefined) {
            return;
        }

        this._finder.emit('create-column', item);
    }

    navigate(direction) {
        if (this._finder == undefined || direction == undefined || direction.length === 0) {
            return;
        }

        this._finder.emit('navigate', { direction: direction });
    }


    // ---------------
    // Private Methods
    // ---------------

    _initializeFinder() {
        if (this._finder == undefined && this.props.data != undefined) {
            const component = document.getElementById(this._componentId);
            if (component == undefined) {
                return;
            }
            this._finder = Finder.default(component, this.props.data, {
                className: this.props.className,
                createItemContent: this.props.createItemContent,
            });
            this._finder.on('leaf-selected', this._onLeafSelected);
            this._finder.on('item-selected', this._onItemSelected);
            this._finder.on('column-created', this._onCreateColumn);
        }
    }

    // --------------
    // Event Handlers
    // --------------

    _onItemSelected(item) {
        if (this.props.onItemSelected != undefined) {
            this.props.onItemSelected(item);
        }
    }

    _onLeafSelected(item) {
        if (this.props.onLeafSelected != undefined) {
            this.props.onLeafSelected(item);
        }
    }

    _onCreateColumn(item) {
        if (this.props.onColumnCreated != undefined) {
            this.props.onColumnCreated(item);
        }
    }
};

ReactFinder.defaultProps = defaultProps;
export default ReactFinder;