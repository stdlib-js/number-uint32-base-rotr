/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var toUint32 = require( '@stdlib/number-int32-base-to-uint32' );


// VARIABLES //

// Shift mask: 00000000000000000000000000011111
var MAX_SHIFT = toUint32( 31 );


// MAIN //

/**
* Performs a bitwise rotation to the right.
*
* ## References
*
* -   [Safe, Efficient, and Portable Rotate in C/C++](http://blog.regehr.org/archives/1063)
* -   [Best practices for rotates in C/C++](https://stackoverflow.com/a/776523/224132)
* -   [Near constant time rotate that does not violate the standards](https://stackoverflow.com/a/31488147/224132)
*
* @param {uinteger32} x - unsigned integer
* @param {uinteger32} shift - number of bits to shift
* @returns {uinteger32} shifted integer
*
* @example
* var toBinaryStringUint32 = require( '@stdlib/number-uint32-base-to-binary-string' );
*
* var bstr = toBinaryStringUint32( 2147483649 );
* // returns '10000000000000000000000000000001'
*
* var x = rotr32( 2147483649, 10 );
* // returns 6291456
*
* bstr = toBinaryStringUint32( x );
* // returns '00000000011000000000000000000000'
*/
function rotr32( x, shift ) {
	shift &= MAX_SHIFT;
	return toUint32( ( x >>> shift ) | (x << ((-shift) & MAX_SHIFT)) );
}


// EXPORTS //

module.exports = rotr32;
