var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/bower_components'));

var products = [
	{
		id:"1",
		name:"Rubix Cube",
		img:"/product.jpg",
		price:100
	},
	{
		id:"2",
		name:"Rubix Cube 2",
		img:"/product.jpg",
		price:25
	},
	{
		id:"3",
		name:"Rubix Cube 3",
		img:"/product.jpg",
		price:45
	},
	{
		id:"4",
		name:"Rubix Cube 4",
		img:"/product.jpg",
		price:34
	}
]
app.get("/product/:id",function(req,res){
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