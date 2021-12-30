/*var express = require('express');

var app = express();
var port = (process.env.PORT || 3000);

app.use("/", proxy());

*/

var proxy = require('html2canvas-proxy');
var express = require('express');

var app = express();
var port = (process.env.PORT || 3030);

app.use('/', proxy());
app.listen(port);