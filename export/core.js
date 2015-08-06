var lib={};
function core()
{
 
    return Object.freeze({
      showlib:lib,

      register:function (key,val)
        {
          if(typeof lib[key]==='undefined') 
          {
            Object.defineProperty(lib,key,{value:val, enumerable: false,configurable: false,writable: false,});  //Explicitly making immutable object
            
          }
          
          else
          {
            console.log("key already exists");
          }
        },
      getValue:function setter(key)
        {
          return lib[key];
        }
  });
  }