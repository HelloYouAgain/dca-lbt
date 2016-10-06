var express = require('express')
var app = express()
app.use('/', express.static(__dirname + '/'))

/*
//Para la utilidad body-parser
var bp = require('body-parser')
app.use(bp.json())


var lista = new Map()
lista.set(1, {id:1, nombre:"patatas", cantidad:"1 bolsa"})
lista.set(2, {id:2, nombre:"whisky",cantidad:"2 botellas"})
var idActual = 3;


app.get('/api/items', function(pet, resp){
	var array = [];
	lista.forEach(function(valor){
		array.push(valor)
	})
	resp.send(array)
})

app.get('/api/items/:id', function(pet,resp){
	var id = parseInt(pet.params.id)
	if (isNaN(id)) {
		resp.status(400);
		resp.end();
	}
	else {
		var item = lista.get(id)
		if (item==undefined) {
			resp.status(404)
			resp.send('No existe el item con id ' + id);
		}
		else
			resp.send(item);
	}
})

//para probar con curl
//curl -d '{"nombre":"tomates","cantidad":1}' -H "Content-Type:application/json" -v http://localhost:3000/api/items
app.post('/api/items', function(pet, resp) {
   var nuevo = pet.body
   if (nuevo.nombre && nuevo.cantidad) {
     var creado = {id: idActual, nombre:nuevo.nombre, cantidad: nuevo.cantidad}
	 lista.set(idActual,creado)
	 idActual++
	 resp.status(201)
	 //Fundamentalismo REST
	 resp.header('Location','http://localhost:3000/api/items/'+creado.id) 
	 //En la práctica muchos APIs devuelven el objeto creado, incluyendo id
	 resp.send(creado)    
   }
   else {
   	 resp.status(400)
   	 resp.send("el objeto no tiene los campos adecuados")
   }
})

//Podéis probar esto con
//curl -X DELETE -v http://localhost:3000/api/items/1
app.delete('/api/items/:id', function(pet, resp){
	var id = parseInt(pet.params.id)
	if (isNaN(id)) {
		resp.status(400);
		resp.end();
	}
	else {
		var item = lista.get(id)
		if (item==undefined) {
			resp.status(404)
			resp.send('No existe el item con id ' + id);
		}
		else{
			lista.delete(id);
			resp.end();
		}
	}
})*/

app.get('/', function(req, res) {   // Carga una vista HTML simple donde irá nuestra Single App Page. Angular Manejará el Frontend
    res.sendFile(__dirname+'/index.html');             
});

app.listen(3000,function(){
	console.log('Marchando el servidor...')

})
