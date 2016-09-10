var server = require('./Server');
var router =require('./router');
var handler=require('./handler');

var handle={};
handle["/home"]=handler.home;
handle["/"]=handler.home;
handle["/review"]=handler.review;

server.StartServer(router.route,handle);