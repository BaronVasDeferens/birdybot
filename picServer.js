const fs = require('fs')
const os = require('os')
const http = require('http')
var hostAddress = '0.0.0.0'
const port = 3000

fs.readFile('index.html', (err, html) => {
	if (err) {throw err; }

	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});

	hostAddress = os.networkInterfaces()["wlan0"][0]["address"];
	console.log("find me at : " + hostAddress + ":" + port);

	server.listen(port, hostAddress, () => {
		console.log('server started on port ' + port);
	});
});


