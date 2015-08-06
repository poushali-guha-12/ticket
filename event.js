// var lib={
// "isPrivilage":isPrivilage();
// };
//FUNCTION TO ADD EVENT EVENT LISTENER
function event() {
    var user = userdetail.getValue("user_details");
    var draw = userdetail.getValue("draw");
    var userjson = userdetail.getValue("forum_json");
   
    var role;

    function addEvent(id, events) {
        var eventName, element;
        if (document.getElementById(id) !== null) {
            element = document.getElementById(id);
            for (eventName in events) {
                element.addEventListener(eventName, events[eventName]);
            }
        }
    } //END OF addEvent
    //USER LOG IN BY ID
    addEvent("go1", {
        click: function() {
            role = getPriviledgeById();
            if (role === "admin") {
                addEvent("add", {
                        click: function() {

                            if (document.getElementById("id").value === '' || document.getElementById("name").value === '' || document.getElementById("role").value === '') {
                                alert("provide all detailes");
                            } else {
                                var sucmsg = userjson.setUser(document.getElementById("id").value, document.getElementById("name").value, document.getElementById("role").value);
                                alert(sucmsg);
                            }


                        }
                    }

                );
            }

        }
    });
    
   
    //GET PRIVILEDGE BY ID AND DRAW TEMPLATE ACCORDINGLY
    function getPriviledgeById() {
        var pri = [];

        //isPriviledge will return the priviledges of the passed ID
        pri = user.isPrivilege(document.getElementById('userId').value);

        for (var i = 0; i < pri.length; i++) {
            //drawTemplate will create the templates
                
            if (pri[i] === "add") {
             
                
                draw.templateAdd();
                draw.insertThread();
                 addEvent("go2",{click:function(){
                                   
                                      ticketId = Math.floor((Math.random() * 999999) + 100000);
                                      //var user=userdetail.getValue("user_details");
                                      
                                      var name = user.getName(document.getElementById('userId').value);

                                      console.log(name);
                                       
                                      draw.ticketView(ticketId,name,document.getElementById('threadHeader').value,document.getElementById('description').value);
                                    document.getElementById('threadHeader').value='';
                                     document.getElementById('description').value='';
                                    }
                                  }
            );
                 addEvent("export2",{click:function(){
                    
                    var exportXX=exportadd.getValue("exportAllTicket");
                    exportXX();
                 }});
            }
            // if (pri[i] === "show") {
               
            //     draw.ticketView();
            // }
            if (pri[i] === "insertUser") {
                if(document.getElementById('ticketDiv0')!==null){
                    document.getElementById('ticketDiv0').remove();
                }
                if(document.getElementById('div4')!==null){
                    document.getElementById('div4').remove();
                }
                draw.templateAdd();
            }
            if (pri[i] === "Id not Matching!!!") {
                alert("Id not match");
            }

            //drawTemplate(pri[i]);
        }
        return user.getRole(document.getElementById('userId').value);
    }
}
userdetail.register("event", event());