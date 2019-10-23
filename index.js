const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true});

const http = require('http');

const server = http.createServer();

server.on('request',(request,response)=>{
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('hello  uyuyuiyuiyworld');
   response.end();
});

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});