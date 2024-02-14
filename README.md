<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Bitwise Rotation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Bitwise rotation to the right.



<section class="usage">

## Usage

To use in Observable,

```javascript
rotr32 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-rotr@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var rotr32 = require( 'path/to/vendor/umd/number-uint32-base-rotr/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-rotr@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.rotr32;
})();
</script>
```

#### rotr32( x, shift )

Performs a bitwise rotation to the right.

```javascript
var toBinaryStringUint32 = require( '@stdlib/number-uint32-base-to-binary-string' );

var x = 2147483649;
var bstr = toBinaryStringUint32( x );
// returns '10000000000000000000000000000001'

var y = rotr32( x, 10 );
// returns 6291456

bstr = toBinaryStringUint32( y );
// returns '00000000011000000000000000000000'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided a `shift` equal to `0`, the function returns the input value.

    ```javascript
    var y = rotr32( 3, 0 );
    // returns 3
    ```

-   If provided a `shift` greater than `31`, the function performs a bitwise rotation based on the `5` least significant bits of `shift` (i.e., `shift % 32`).

    ```javascript
    var shift = 34; // 00000000000000000000000000100010

    var y = rotr( 1, shift ); // 01000000000000000000000000000000
    // returns 1073741824
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-to-binary-string@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-rotr@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var HALF;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = i;
    y = rotr32( x, 10 );
    console.log( '%d => %s => %s => %d', x, toBinaryStringUint32( x ), toBinaryStringUint32( y ), y );
}

HALF = (MAX_INT+1) / 2;
for ( i = 0; i < 100; i++ ) {
    x = HALF + i;
    y = rotr32( x, 10 );
    console.log( '%d => %s => %s => %d', x, toBinaryStringUint32( x ), toBinaryStringUint32( y ), y );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-uint32/base/rotl`][@stdlib/number/uint32/base/rotl]</span><span class="delimiter">: </span><span class="description">bitwise rotation to the left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint32-base-rotr.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint32-base-rotr

[test-image]: https://github.com/stdlib-js/number-uint32-base-rotr/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/number-uint32-base-rotr/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint32-base-rotr/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint32-base-rotr?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint32-base-rotr.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint32-base-rotr/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint32-base-rotr/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint32-base-rotr/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint32-base-rotr/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint32-base-rotr/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint32-base-rotr/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint32-base-rotr/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint32-base-rotr/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint32-base-rotr/main/LICENSE

<!-- <related-links> -->

[@stdlib/number/uint32/base/rotl]: https://github.com/stdlib-js/number-uint32-base-rotl/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
