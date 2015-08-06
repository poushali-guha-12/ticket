function exportTicket(element) {
    var textArray = [];
    var parent = element.parentNode;
    children = parent.childNodes;
    for (i = 0; i < children.length; i++) {
        var childid = children[i].id;
        var childtype=children[i].type;
        if (childid == "id1" && childtype=="number") {
            var content = children[i].value;
            textArray.push(content);
        } else {
            if (childid = "ticketName" && childtype=="text") {
                var content = children[i].value;
                textArray.push(content);
            } else if (childid == "header" && childtype=="text") {
                    var content = children[i].value;
                    textArray.push(content);
                 } 
        }
    }
    var status=parent.style.backgroundColor;
    //console.log(status);
    if(status=="red"){
        var content = "confirmed";
                    textArray.push(content);

    }
    else {
        if(status =="green"){
            var content = "rejected";
                    textArray.push(content);
        }
        else {
            var content = "none";
                    textArray.push(content);

        }
    }
   // var desc=document.getElementsByTagName("textarea");
   // for(k=0;k<desc.length;k++){
   //  if(desc)
   // }

    var myJsonString = JSON.stringify(textArray);
    console.log(myJsonString);
        }

function exportAllTicket() {

    var children = document.getElementsByName("export");
    for (j = 0; j < children.length; j++) {
        exportTicket(children[j]);
    }
}
var exportadd=core();
exportadd.register("exportTicket",exportTicket);
exportadd.register("exportAllTicket",exportAllTicket);