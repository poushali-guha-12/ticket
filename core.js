var lib={};
function core()
{
	Object.defineProperty(core,"getAuthetication",{
		value:function(val){var a=Math.random()*100000000;var b=Math.random()*100;var c=Math.round(a/b); return c;},
        configurable:false,
		writable:false,
		enumerable:false,});



	Object.defineProperty(core,"register",{
		value:function(val,lib_key,pass)
			{
				if(typeof lib[lib_key]==='undefined')
			  		lib[lib_key]=[val,pass];
			  	else if(typeof lib[lib_key]==="object" && lib[lib_key][1]==pass)
			  	{
			  		lib[lib_key]=[val,pass];
			  		console.log("Congratulation,you have set a new value to the core library!!");
			  	}
			  	else if(typeof lib[lib_key]==="object" && lib[lib_key][1]!==pass)
			  	{
			  		console.log("You are not authorized to do this operation");
			  	}

		    },
		configurable:false,
		writable:false,
		enumerable:false,});


	Object.defineProperty(core,"Access_lib",{
		value:function(lib_key)
			  	{
                 	return lib[lib_key];
				},
		configurable:false,
		writable:false,
		enumerable:false
	});

}
core();

