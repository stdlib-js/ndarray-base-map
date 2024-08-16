<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# map

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a callback function to elements in an input ndarray and assign results to elements in an output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-map
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var map = require( '@stdlib/ndarray-base-map' );
```

#### map( arrays, fcn\[, thisArg] )

Applies a callback function to elements in an input ndarray and assigns results to elements in an output ndarray.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function scale( x ) {
    return x * 10.0;
}

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var ybuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 2 ];

// Define the array strides:
var sx = [ 2, 1 ];
var sy = [ 2, 1 ];

// Define the index offsets:
var ox = 0;
var oy = 0;

// Create the input and output ndarray-like objects:
var x = {
    'ref': null,
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': shape,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Apply the map function:
map( [ x, y ], scale );

console.log( y.data );
// => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0, 60.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray and one output ndarray.
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context.

The callback function is provided the following arguments:

-   **values**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Each provided ndarray should be an object with the following properties:

    -   **dtype**: data type.
    -   **data**: data buffer.
    -   **shape**: dimensions.
    -   **strides**: stride lengths.
    -   **offset**: index offset.
    -   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a callback function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var abs = require( '@stdlib/math-base-special-abs' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var naryFunction = require( '@stdlib/utils-nary-function' );
var map = require( '@stdlib/ndarray-base-map' );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

map( [ x, y ], naryFunction( abs, 1 ) );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-map.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-map

[test-image]: https://github.com/stdlib-js/ndarray-base-map/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-map/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-map/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-map?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-map.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-map/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-map/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-map/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-map/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-map/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-map/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-map/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-map/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-map/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
