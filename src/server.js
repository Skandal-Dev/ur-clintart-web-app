/*var express = require('express');

var app = express();
var port = (process.env.PORT || 3000);

app.use("/", proxy());

*/

var proxy = require('html2canvas-proxy');
var express = require('express');
const cors = require('cors');
var app = express();
var port = (process.env.PORT || 3030);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/', proxy());
app.listen(port);
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')


app.post("/add", jsonParser, (req, res) => {
  console.log(req.body);
  connection.query('INSERT INTO `CDsS` (nameCard, lvl, rarity, power, damage, img, imageSize, clan , ability, bonus, x , y, prismatic) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.nameCard, req.body.lvl, req.body.rarity , req.body.power , req.body.damage , req.body.img , req.body.imageSize, req.body.clan, req.body.ability, req.body.bonus, req.body.x , req.body.y , req.body.prismatic],(error,
  results) => {
     if (error) return res.json({ error: error });

     res.send(results)

     });
 });
