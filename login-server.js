const LoginUsers = ['Fedy'];
let fs = require('fs');
let path =  require('path');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.set('port', (process.env.PORT || 3002));
app.use(express.static(path.join(__dirname, 'build/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/', (req, res, next) => {
	console.log('asdasdasd');
	res.end('gahsgdjhagsdgsad');
});

app.get('*', (req, res) => {
	console.log('sdfsdfdsf');
	
	fs.readFile(`${__dirname}/build/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port') , ()=>
	console.log(`UserLogin Form Server listen ${app.get('port') } port`)
);