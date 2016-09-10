var server = require('./Server');
var router =require('./router');
server.StartServer(router.route);