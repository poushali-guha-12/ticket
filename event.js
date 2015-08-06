
//FUNCTION TO ADD EVENT EVENT LISTENER
function addEvent(id,events)
{
	var eventName,element;

	element=document.getElementById(id);
  for (eventName in events) {
            element.addEventListener(eventName, events[eventName]);
      }
}//END OF addEvent

addEvent("b1",{click:function(){alert("go clicked");}});
addEvent("b2",{click:function(){alert("goo clicked");}});
//USER LOG IN BY ID
addEvent("go1",{click:function(){
                                  getPriviledgeById();
                                }
              }
        );
//ADD USER 
addEvent("add",{click:function(){
                                  setUser(document.getElementById(name).value,document.getElementById(id).value,document.getElementById(role).value);
                                }
                }
        );

//EXPORT ALL TICKET 
addEvent("exportAll",{click:function(){
                                  exportAllTicket();
                                }
              }
        );
//ADD TICKET 
addEvent("go2",{click:function(){
                                  ticketId = Math.floor((Math.random() * 999999) + 100000);
                                  name = getName(document.getElementById('userId').value);
                                  //addTicket will return the specific EXPORT button ID
                                  exportId = addTicket(ticketId,name,header,description);
                                  //EXPORT SINGLE TICKET 
                                  addEvent("exportId",{click:function(){
                                                                    exportTicket(this);
                                                                  }
                                                }
                                          );
                                }
        );
//GET PRIVILEDGE BY ID AND DRAW TEMPLATE ACCORDINGLY
function getPriviledgeById()
{
  var pri=[];
  //isPriviledge will return the priviledges of the passed ID
  pri=isPriviledge(document.getElementById('userId').value);
  for(var i=0;i<pri.length;i++)
  {
    //drawTemplate will create the templates
    drawTemplate(pri[i]);
  }
}