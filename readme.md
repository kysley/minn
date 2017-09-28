# minn

> Quickly find the smallest value in an array `[1,56,9,1925,586,3]` -> `[1]`


## Usage

```
$ yarn add minn
```

```js
const min = require('min');

min([1, 3, 5, 7, 10]);
//=> 1

min([5, 'f', '0', 'o', 3]);
//=> 3
```


## API

### min(input)

#### input

Type: `array`

Array that min will find the lowest number for

## Related

- [min-cli](https://github.com/kysley/minn-cli) - CLI for this module


## License

MIT © [Evan Kysley](http://kysley.com)