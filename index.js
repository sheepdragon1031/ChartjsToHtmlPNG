var http = require('http');
var fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image')

http.createServer(function (req, response) {
    fs.readFile('index.html', 'utf-8', function (err, data) {
        // response.writeHead(200, { 'Content-Type': 'text/html' });

        var chartData = [], base64;
        for (var i = 0; i < 8; i++)
            chartData.push(Math.random() * 50);

        var result = data.replace('{{chartData}}', JSON.stringify(chartData));
        response.write(result);
        response.end();
        
        nodeHtmlToImage({
            output: 'images.png',
            html: result,
          })
            .then(() => console.log('The image was created successfully!'))
    });
   
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');




//labels: 