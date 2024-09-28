/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isSameComplex128Array = require( '@stdlib/assert-is-same-complex128array' );
var isSameFloat64Array = require( '@stdlib/assert-is-same-float64array' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Float64Array = require( '@stdlib/array-float64' );
var zeros = require( '@stdlib/array-zeros' );
var ones = require( '@stdlib/array-ones' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var numel = require( '@stdlib/ndarray-base-numel' );
var map = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, singleton dimensions)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, singleton dimensions, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, non-contiguous, same sign strides)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 16, 16, 16, 16, 16, 16, 16, 16, 8, 4, 2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, non-contiguous, mixed sign strides)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'row-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 16, 16, 16, 16, 16, 16, 16, 16, -8, -4, -2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array( [
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0
	] );
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 16, 16, 16, 16, 16, 16, 16, 16, 8, 4, 2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (row-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'row-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 16, 16, 16, 16, 16, 16, -16, 16, -8, -4, -2, 1 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, singleton dimensions)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, singleton dimensions, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, contiguous)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0,
		10.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape('the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, non-contiguous, same sign strides)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 8 ];
	o = strides2offset(sh, st);

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape('the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, non-contiguous, mixed sign strides)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'float64';
	ord = 'column-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, 1, 1, 1, 1, 1, 1, -1, -4, 8, -8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Float64Array([
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0,
		10.0,
		10.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameFloat64Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return z * 10.0;
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, contiguous, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = shape2strides( sh, ord );
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( numel( sh ), dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( numel( sh ), dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array( [
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0
	] );
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, non-contiguous, same sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 8, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});

tape( 'the function applies a callback to each indexed element of an input n-dimensional ndarray and assigns results to the elements in an output n-dimensional ndarray (column-major, non-contiguous, mixed sign strides, accessors)', function test( t ) {
	var expected;
	var ord;
	var sh;
	var st;
	var dt;
	var o;
	var x;
	var y;

	dt = 'complex128';
	ord = 'column-major';
	sh = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2 ];
	st = [ 1, 1, 1, 1, -1, 1, -1, 1, 1, -4, -8, 8 ];
	o = strides2offset( sh, st );

	x = ndarray( dt, ones( 16, dt ), sh, st, o, ord );
	y = ndarray( dt, zeros( 16, dt ), sh, st, o, ord );

	map( [ x, y ], scale );

	expected = new Complex128Array([
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		10.0,
		0.0,
		10.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( y.data, expected ), true, 'returns expected value' );

	t.end();

	function scale( z ) {
		return new Complex128( real( z )*10.0, imag( z )*10.0 );
	}
});