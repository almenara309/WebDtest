var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var method_override = require("method-override");
var Schema = mongoose.Schema;

var app = express();

mongoose.connect("mongodb://192.168.30.106/datos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var multer = require('multer');
var upload = multer({ dest: './uploads' });
app.use(method_override("_method"));

//Definir el schema 
var datosSchemaJSON = {
	tipo:Number, 
	temperatura : Number ,
	estado: Number,
	enchufes: Number,
	modo: Number,
	sensor1 : Number,
	sensor2: Number,
	luz1: Number,
	luz2: Number,
	luz3: Number,
};

var datosSchema = new Schema(datosSchemaJSON);

var Datos = mongoose.model("Datos", datosSchema );
app.set("view engine","jade");
app.use(express.static("public"));
app.listen(8080);

app.get("/",function(solicitud,respuesta){
	respuesta.render("index");
});

app.get("/datos",function(solicitud,respuesta){
	respuesta.render("creardatos");
});

console.log("Servidor weeb iniciado");
