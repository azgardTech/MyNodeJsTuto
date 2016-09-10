var http= require('http');
var url= require('url');


function StartServer(route,handle)
{
		function onRequest(request,response)
			{
				var pathname = url.parse(request.url).pathname;
				console.log("request received for" + pathname);
				route(handle,pathname);
				response.writeHead(200,{"content-Type":"text/plain"});
				response.write("My Node App");
				response.end();
			}
		http.createServer(onRequest).listen(8888);
		console.log("sever on 8888");
	}

exports.StartServer=StartServer;