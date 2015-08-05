// var lib={
// "isPrivilage":isPrivilage();
// };
//FUNCTION TO ADD EVENT EVENT LISTENER
function event()
{
  var user=userdetail.getValue("user_details");
function addEvent(id,events)
{
	var eventName,element;
	element=document.getElementById(id);
  for (eventName in events) {
            element.addEventListener(eventName, events[eventName]);
      }
}//END OF addEvent
//USER LOG IN BY ID
addEvent("go1",{click:function(){
                                  getPriviledgeById();
                                }
              }
        );
//ADD USER 
/*addEvent("add",{click:function(){
                                  setUser(document.getElementById(newName).value,document.getElementById(newId).value,document.getElementById(newRole).value);
                                }
                }
        );*/

//EXPORT ALL TICKET 
/*addEvent("exportAll",{click:function(){
                                  exportAllTicket();
                                }
              }
        );*/
//ADD TICKET 
addEvent("go2",{click:function(){
                                  ticketId = Math.floor((Math.random() * 999999) + 100000);
                                  //var user=userdetail.getValue("user_details");
                                  debugger;
                                  var name = user.getName(document.getElementById('userId').value);

                                  console.log(name);
                                  //addTicket will return the specific EXPORT button ID
                                  //exportId = 
                                  //addTicket(ticketId,name,header,description,exportId);
                                  //EXPORT SINGLE TICKET 
                                  /*addEvent("exportId",{click:function(){
                                                                    exportTicket();
                                                                  }
                                                }
                                          );*/
                                }
                              }
        );
//GET PRIVILEDGE BY ID AND DRAW TEMPLATE ACCORDINGLY
function getPriviledgeById()
{
  var pri=[];
   
  //isPriviledge will return the priviledges of the passed ID
  pri=user.isPrivilege(document.getElementById('userId').value);

  for(var i=0;i<pri.length;i++)
  {
    //drawTemplate will create the templates
    console.log(pri[i]);
    //drawTemplate(pri[i]);
  }
}
}
userdetail.register("event",event());