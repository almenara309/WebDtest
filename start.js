var express = require('express');


var app = express();
app.set("view engine","jade");
app.use(express.static("public"));
app.listen(8080);

app.get("/",function(solicitud,respuesta){
	respuesta.render("index");
});

console.log("Servidor web iniciado");