/**
 * Created by Sven on 14-1-2.
 */



var http = require('http');
var util = require('util');
var events=require('events');

function Dispatcher(){

    events.EventEmitter.call(this);

}



util.inherits(Dispatcher,events.EventEmitter);

var dis=new Dispatcher();

var server = http.createServer(function (req, res) {
    dis.emit('create',req,res);
}).listen(8000);

server.on('connection',function(socket){

    dis.emit('connection',socket);

});


dis.on('create',function(req,res){

    res.writeHead(200);
    res.end('hello world,create\n');
});

dis.on('connection',function(socket){

    console.log('connection');

});
