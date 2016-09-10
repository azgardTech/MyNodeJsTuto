var http= require('http');


function StartServer()
{
		function onRequest(request,response)
			{
				console.log("request recived");
				response.writeHead(200,{"content-Type":"text/plain"});
				response.write("My Node App");
				response.end();
			}
		http.createServer(onRequest).listen(8888);
		console.log("sever on 8888");
	}

exports.StartServer=StartServer;