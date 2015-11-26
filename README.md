# The ctph.js

JavaScript library for calculating context triggered piecewise hash(CTPH, also called fuzzy hashing). CTPH can be used to identify similar or almost identical content(text,img,etc.), the library can works both on NodeJS and browser.

More information about CTPH: [Identifying almost identical files using context triggered piecewise hashing](http://dfrws.org/2006/proceedings/12-Kornblum.pdf "Title")

# Install

```
npm install ctph.js
```

# Example

```js
var ctph = require('ctph.js');

var str1 = "Java is a computer programming language, Not to be confused with JavaScript.";
var str2 = "JavaScript is a computer programming language, Not to be confused with Java.";

var d1 = ctph.digest(str1);
var d2 = ctph.digest(str2);
var similarity = ctph.similarity(d1, d2);// 75

var crypto = require('crypto');
var rd1 = ctph.digest(crypto.randomBytes(4096));
var rd2 = ctph.digest(crypto.randomBytes(4096));
var rsimilarity = ctph.similarity(rd1, rd2); //nears 0
```

# License
MIT