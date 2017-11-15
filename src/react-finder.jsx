import React, { Component } from 'react';
import * as Finder from "finderjs" ;
import * as uuidv4 from "uuid/v4";

const defaultProps = {
    className: "",
    createItemContent: undefined,
    data: [],
    disableAutoScroll: false,
    onItemSelected: null,
    onLeafSelected: null,
    onColumnCreated: null,
}

class ReactFinder extends Component {

    constructor(props) {
        super(props);

        this._componentId = uuidv4.default();
        this._finder = undefined;

        this.createColumn      = this.createColumn.bind(this);
        this.navigate          = this.navigate.bind(this);
        this._initializeFinder = this._initializeFinder.bind(this);
        this._onItemSelected   = this._onItemSelected.bind(this);
        this._onLeafSelected   = this._onLeafSelected.bind(this);
        this._onCreateColumn   = this._onCreateColumn.bind(this);
    }

    componentDidMount() {
        this._initializeFinder();
    }

    componentWillUpdate(nextProps) {
        if (nextProps.data !== this.props.data) {
            this._componentId = uuidv4.default();
            this._finder = undefined;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this._initializeFinder();
    }

    render() {
        var className = "c-finder ";

        if (this.props.className != undefined) {
            className += this.props.className
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
            this._container = document.getElementById(this._componentId);
            if (this._container == undefined) {
                return;
            }
            this._finder = Finder.default(this._container, this.props.data, {
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
        if (this.props.onItemSelected != undefined && item != undefined && item.item != undefined && item.item._item != undefined) {
            this.props.onItemSelected(item.item._item, item);
        }
    }

    _onLeafSelected(item) {
        if (this.props.onLeafSelected != undefined) {
            this.props.onLeafSelected(item);
        }
    }

    _onCreateColumn(item) {
        if (this._container != undefined && !this.props.disableAutoScroll) {
            this._container.scrollLeft = this._container.scrollWidth - this._container.clientWidth;
        }

        if (this.props.onColumnCreated != undefined) {
            this.props.onColumnCreated(item);
        }
    }
};

ReactFinder.defaultProps = defaultProps;
export default ReactFinder;