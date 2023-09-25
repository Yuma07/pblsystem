const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');


const main_page = fs.readFileSync('./xmind-embed-viewer/dist/public/index.ejs', 'utf8');
//const xmind = fs.readFileSync('./xmind-embed-viewer/umd/xmind-embed-viewer.js', 'utf8');
const image1 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像3.png');
const image2 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像4.png');
const image3 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像5.png');
const image4 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像6.png');
const image5 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像7.png');
const image6 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像8.png');
const image7 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像9.png');
const image8 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像10.png');
const image9 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像11.png');
const image10 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像12.png');
const image11 = fs.readFileSync('./xmind-embed-viewer/dist/public/img/画像13.png');

const xmind = fs.readFileSync('./xmind-embed-viewer/dist/umd/xmind-embed-viewer.js', 'utf8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start');


//ここまでメインプログラム
function getFromClient(request, response){
    var url_parts = url.parse(request.url, true);
    switch(url_parts.pathname){
        case '/':
            response_main(request, response);
            break;

        case '/image1':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image1);
            break;
        case '/image2':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image2);
            break;
        case '/image3':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image3);
            break;
        case '/image4':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image4);
            break;
        case '/image5':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image5);
            break;

        case '/image6':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image6);
            break;
        case '/image7':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image7);
            break;
        case '/image8':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image8);
            break;
        case '/image9':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image9);
            break;
        case '/image10':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image10);
            break;

        case '/image11':
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.end(image11);
            break;

        case '/xmind':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(xmind);
            break;

        default:
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('no page...');
            break;
    }
}

//mainのアクセス処理
function  response_main(request, response){
    var content = ejs.render(main_page,{
        image: image1
    });
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
}
