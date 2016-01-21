var express=require("express");
var morgan=require("morgan");
var bodyParser=require("body-parser");

//getting from config.js File
var config=require("./config");

//doing mongoose hisaab for database
var mongoose=require("mongoose");

//checking database connection
mongoose.connect(config.database,function(err){
	if(err){
		console.log("database connection unsuccessful");
	}
	else{
		console.log("database connection successful");	
	}

});



var app=express();

//if extended is false only strings can be encoded
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


var api=require("./app/routes/api")(app,express);
app.use('/api',api);



app.use(express.static(__dirname+'/public'));
//getting html page
app.get('*',function(req,res){
	res.sendFile(__dirname+'/public/app/views/index.html');

});





app.listen(config.port,function(err){

	if(err){
		console.log(err);
	}else{
		console.log("its Listening");
	}


}
	


);
