var ctph = require('./ctph.js');

var str1 = "Java is a computer programming language, Not to be confused with JavaScript.";
var str2 = "JavaScript is a computer programming language, Not to be confused with Java.";

var d1 = ctph.digest(str1);
var d2 = ctph.digest(str2);
var similarity = ctph.similarity(d1, d2);// 75
console.log(d1, d2, similarity);

var crypto = require('crypto');
var rd1 = ctph.digest(crypto.randomBytes(4096));
var rd2 = ctph.digest(crypto.randomBytes(4096));
var rsimilarity = ctph.similarity(rd1, rd2); //nears 0
console.log(rd1, rd2 ,rsimilarity); 