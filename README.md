# React Tooltip

A simple tooltip component for ReactJS.

## Installation

```bash
npm install --save-dev react-tooltip-component
```

## Usage

### Style

#### Webpack

```js
import 'react-tooltip-component/lib/tooltip.css';
//require('react-tooltip-component/lib/tooltip.css');
```

### Other

```html
<link rel="stylesheet" type="text/css" href="path/to/react-tooltip-component/lib/tooltip.css">
```

### JS

```js
import Tooltip from 'react-tooltip-component';

<Tooltip title='Tooltip on top' position='top'>
  <button className='btn btn-default'>Tooltip on top</button>
</Tooltip>
```

### UMD

```html
<link rel="stylesheet" type="text/css" href="path/to/react-tooltip-component/dist/tooltip.css">
<script src="path/to/react-tooltip-component/dist/react-tooltip-component.js"></script>
```

```js
const Tooltip = window.ReactTooltipComponent;
```

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| title | string | true |  |  |
| position | string | false | `top` | ['left', 'top', 'right', 'bottom'] |
| fixed | bool | false | true | fixed or not |
| container | element | false | document.body |  |
| children | node | true |  |

## Example

View [demo](http://vn38minhtran.github.io/react-tooltip-component) or example folder.
