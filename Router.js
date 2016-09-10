function route(handle,pathname)
{
	if(typeof handle[pathname]==='function'){
		handle[pathname]();
	}
	else
		{console.log("page does not exist");}
	;
}
exports.route = route;