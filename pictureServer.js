const fs = require('fs')
const os = require('os')
const http = require('http')
var hostAddress = '0.0.0.0'
const port = 3000

fs.readFile('index.html', (err, html) => {
	if (err) {throw err; }

	const server = http.createServer((req, res) => {

		// TODO : spend some more time examining the requests to learn more about HTTP!

		if (req.method === 'GET') {
			
			var accepts = req.headers.accept

			// A request for an image has arrived: serve an image
			if (req.url.includes(".jpg")) {

				var fileName = req.url.split("/")[1];

				fs.readFile(fileName, (err, f) => {
					res.writeHead(200, {'Content-type': 'image/jpg'});
					res.end(f);
				});
			}
			else { // A request for text arrives

				fs.readdir(".", (err, files) => {
					var pictureFileNames = "";
			
					files.forEach(file => {
						if (file.endsWith(".jpg")) {
							pictureFileNames +=
							("<a href=\"" + file + "\"><img src=\"" + file + "\" width=\"50\" height=\"50\"></img></a>\n");
						}
					});
			
					html = html.toString().replace("%%IMAGE_LIST%%", pictureFileNames);

					res.writeHead(200, {'Content-type' : 'text/html'});
					res.write(html);
					res.end();
				});
			}
		}
	});

	// Obtain the host address
	hostAddress = os.networkInterfaces()["wlan0"][0]["address"]

	server.listen(port, hostAddress, () => {
		console.log('picServer started : ' + hostAddress + ":" + port);
	});
});