# react-finderjs

React componet wrapper for [https://mynameistechno.github.io/finderjs/](FinderJs) javascript component

## Installation

```bash
npm install -save react-finderjs
```

## Usage

```
import * as ReactFinder from "react-finderjs";

const data = [
  {
    id: 1,
    label: 'Label A'
    children: [
      {
        id: 10,
        label: 'Label A1'
      },
      {
        id: 11,
        label: 'Label A2'
      }
    ]
  }, {
    id: 2,
    label: 'Label B'
  }
];

<ReactFinder
  className = ""
  data = {data} />

```

Parameter | Type | Description
----------|------|------------
className | string | Custom class name for the wrapping div
createItemContent | Function | Define how each item is rendered. The first parameter passed in is the config object and the second is the item object that is currently being iterated on. It should return an HTML Element.
data| Array | Data source is a array of objects
onItemSelected| Function | Callback function when item selected
onLeafSelected| Function | Callback function when leaf node selected
onColumnCreated| Function | Callback function when column is created

### Data

Each item in the array itself should be an object. Each object that doesn't contain a `children` property is considered a leaf node. When a leaf node is selected, the `onLeafSelected` event will be emitted. When present, the value of the `children` property should be an array. When a node has children and it is selected, it will use the `children` to populate the next column.

#### Notes

If an object has a `url` property it will be treated slightly differently: the anchor tag that wraps the item will have the `href` attribute assigned to it. Upon selection of this item the browser will be redirected to the provided URL.

### Events

`finder` will return an EventEmitter which allows you to listen to (and emit) the following events:

Event                    | Description
-------------------------|-------------------------
`item-selected`          | An item was selected (clicked or keyboard arrow)
`leaf-selected`          | A leaf node was selected
`create-column `         | Append a column to the container
`column-created`         | A column was appended to the container
`navigate`               | Navigate the finder by going `up`, `down`, `right`, or `left`

See the examples for more [details](example).

### Options

Option | Type |Description
-------|------|-----------
`className`| Object | Override the [default classnames](https://github.com/mynameistechno/finderjs/blob/master/index.js#L14) by populating this object
`createItemContent` | Function | Define how each item is rendered. The first parameter passed in is the `config` object and the second is the `item` object that is currently being iterated on. It should return an HTML Element.

## Project commands

Command       | Description
--------------|-------------------------------------
`npm run build`  | Build /dist finderjs
`npm run clean`| Deletes /dist folder for build
`npm run publish`  | Run clean & build commands
`npm run test`   | Run test (not completed)
`npm run watch`   | Run watch for file changes
