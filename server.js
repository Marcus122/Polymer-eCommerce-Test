var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/bower_components'));

var products = [
	{
		id:"12345",
		name:"Rubix Cube",
		img:"/product.jpg"
	}
]
app.get("/product/:id",function(req,res){
	console.log(req.params.id);
	for( i in products){
		if(products[i].id === req.params.id){
			res.setHeader('Content-Type', 'application/json');
    		res.send(JSON.stringify(products[i]));
			return;
		}
	}
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));
});

app.listen(process.env.PORT || 8081);