//FUNCTION TO ADD EVENT EVENT LISTENER
function event() {
    var user = userdetail.getValue("user_details");
    var draw = userdetail.getValue("draw");
    var userjson = userdetail.getValue("forum_json");
    var role, div1, div2, div3, div4;

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

    div1 = draw.login();
    addEvent(div1.go1, {
        click: function(){
                            getPriviledgeById();
                        }
                    }
            );
    div2 = draw.addUser();
    document.getElementById('addUserDiv').style.display="none";
    addEvent(div2.add_user, {
                        click: function() {

                            if (document.getElementById(div2.login_id).value === '' || document.getElementById(div2.name).value === '' || document.getElementById(div2.role).value === '') {
                                
                                alert("provide all detailes");
                            } 
                            else 
                            {
                                var sucmsg = userjson.setUser(document.getElementById(div2.login_id).value, document.getElementById(div2.name).value, document.getElementById(div2.role).value);
                                alert(document.getElementById(div2.login_id).value);
                                alert(document.getElementById(div2.name).value);
                                alert(document.getElementById(div2.role).value);
                                alert(sucmsg);
                            }


                        }
                    });
    

    //GET PRIVILEDGE BY ID AND DRAW TEMPLATE ACCORDINGLY
    function getPriviledgeById() {
                var pri = [];

                //isPriviledge will return the priviledges of the passed ID
                pri = user.isPrivilege(document.getElementById(div1.login_id).value);

                for (var i = 0; i < pri.length; i++) {
                    //drawTemplate will create the templates

                    if (pri[i] === "add") {
                    if(document.getElementById('insertionDiv')==null){
                        div4 = draw.createTicket();
                        addEvent("go2", {
                            click: function() {

                                ticketId = Math.floor((Math.random() * 999999) + 100000);
                                //var user=userdetail.getValue("user_details");

                                var name = user.getName(document.getElementById(div1.login_id).value);

                                console.log(name);
                                alert(div4.insert_header);
                                alert(div4.insert_description);

                                draw.showTicket(ticketId, name, document.getElementById(div4.insert_header).value, document.getElementById(div4.insert_description).value);
                                document.getElementById(div4.insert_header).value = '';
                                document.getElementById(div4.insert_description).value = '';
                            }
                        });
                    }
                    }

                    if (pri[i] === "insertUser") {
                        document.getElementById(div2.add_user).disabled = false;
                        document.getElementById("viewDiv").style.display = "none";
                        if(document.getElementById("insertionDiv")!=null){
                            document.getElementById("insertionDiv").style.display = "none";
                        }
                        if (document.getElementById('ticketDiv0') !== null) {
                            document.getElementById('ticketDiv0').remove();
                        }
                        if (document.getElementById('div4') !== null) {
                            document.getElementById('div4').remove();
                        }

                    } 
                    else {
                        document.getElementById(div2.add_user).disabled = true;

                        document.getElementById("viewDiv").style.display = "block";
                        document.getElementById("insertionDiv").style.display = "block";
                    }
                    if (pri[i] === "Id not Matching!!!") {
                        alert("Id not match");
                    } else {

                        document.getElementById('addUserDiv').style.display = "block";
                    }

                    //drawTemplate(pri[i]);
                }
                return user.getRole(document.getElementById(div1.login_id).value);
            }
}
userdetail.register("event", event());