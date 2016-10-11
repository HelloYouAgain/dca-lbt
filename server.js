var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))


//Variables de almacenaje de datos
var errorsArray=[
			{
			id: 1,
			gravity: 'serio',
			type: 'menor',
			creator: {
				email: 'Jose.p@gm.com',
				name:'Jose'
			},
			devsInvolved: {dev1: true, dev2: false, dev3: true, dev4: false},
			shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim cursus ultrices. Etiam efficitur feugiat lectus id consectetur. Curabitur in ligula sapien. Fusce elementum scelerisque accumsan.',
			largeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim cursus ultrices. Etiam efficitur feugiat lectus id consectetur. Curabitur in ligula sapien. Fusce elementum scelerisque accumsan. Donec facilisis eros sed porttitor tempus. Sed gravida non velit condimentum luctus. Vivamus a sodales sapien. Praesent ultricies varius magna, id interdum purus mollis id. Cras dapibus purus nec dictum laoreet. Quisque venenatis orci sit amet lectus pharetra congue. Ut tortor mi, congue tristique sem et, vulputate vestibulum lacus. Phasellus at condimentum enim. Suspendisse sagittis mattis risus ac interdum. Ut ut sodales ligula, tempor facilisis urna.',
			status: 'listado',
			comments:[
				{
					author: {
						name: 'Carlos',
						email: 'c.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				},
				{
					author: {
						name: 'Pedro',
						email: 'p.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				},
				{
					author: {
						name: 'Jose',
						email: 'j.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				}
			]
	},
			{
			id: 2,
			gravity: '',
			type: '',
			creator: {
				email: 'Pepe.llb@gm.com',
				name:'Pepe'
			},
			devsInvolved: {dev1: false, dev2: false, dev3: false, dev4: false},
			shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim cursus ultrices. Etiam efficitur feugiat lectus id consectetur. Curabitur in ligula sapien. Fusce elementum scelerisque accumsan.',
			largeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim cursus ultrices. Etiam efficitur feugiat lectus id consectetur. Curabitur in ligula sapien. Fusce elementum scelerisque accumsan. Donec facilisis eros sed porttitor tempus. Sed gravida non velit condimentum luctus. Vivamus a sodales sapien. Praesent ultricies varius magna, id interdum purus mollis id. Cras dapibus purus nec dictum laoreet. Quisque venenatis orci sit amet lectus pharetra congue. Ut tortor mi, congue tristique sem et, vulputate vestibulum lacus. Phasellus at condimentum enim. Suspendisse sagittis mattis risus ac interdum. Ut ut sodales ligula, tempor facilisis urna.',
			status: 'pendiente',
			comments:[
				{
					author: {
						name: 'Carlos',
						email: 'c.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				},
				{
					author: {
						name: 'Pedro',
						email: 'p.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				},
				{
					author: {
						name: 'Jose',
						email: 'j.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				}
			]
	},
			{
			id: 3,
			gravity: 'grave',
			type: 'importante',
			creator: {
				email: 'Manuel.js@gm.com',
				name:'Manuel'
			},
			devsInvolved: {dev1: true, dev2: false, dev3: false, dev4: false},
			shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim cursus ultrices. Etiam efficitur feugiat lectus id consectetur. Curabitur in ligula sapien. Fusce elementum scelerisque accumsan.',
			largeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim cursus ultrices. Etiam efficitur feugiat lectus id consectetur. Curabitur in ligula sapien. Fusce elementum scelerisque accumsan. Donec facilisis eros sed porttitor tempus. Sed gravida non velit condimentum luctus. Vivamus a sodales sapien. Praesent ultricies varius magna, id interdum purus mollis id. Cras dapibus purus nec dictum laoreet. Quisque venenatis orci sit amet lectus pharetra congue. Ut tortor mi, congue tristique sem et, vulputate vestibulum lacus. Phasellus at condimentum enim. Suspendisse sagittis mattis risus ac interdum. Ut ut sodales ligula, tempor facilisis urna.',
			status: 'resuelto',
			comments:[
				{
					author: {
						name: 'Carlos',
						email: 'c.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				},
				{
					author: {
						name: 'Pedro',
						email: 'p.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				},
				{
					author: {
						name: 'Jose',
						email: 'j.vill@gm.com'
					},
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				}
			]
	}
	]

//Consultas
app.get('/getErrorsArray', function (req, res) {
   res.json({data: errorsArray}); 
});

app.get('/getError/:id', function (req, res) {
   res.json({data: errorsArray[req.params.id-1]}); 
});

app.post('/postNewError', function(req, res) {
		var error = req.body.data;
		error.id = errorsArray.length+1;
		errorsArray.push(error);
    res.end();
});

app.post('/postChangesError/:id', function(req, res) {
		var error = req.body.data;
		errorsArray[req.params.id-1] = error;
    res.end();
});

app.get('/', function(req, res) {   // Carga una vista HTML simple donde irá nuestra Single App Page. Angular Manejará el Frontend
    res.sendFile(__dirname+'/index.html');             
});

app.listen(3000,function(){
	console.log('Marchando el servidor en el puerto 3000...')

})


