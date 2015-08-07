function exportTicket(element) {
    var textArray = [];
    var parent = element.parentNode;
    var divchild = parent.childNodes;
    var children = divchild[0].childNodes;
    for (i = 0; i < children.length; i++) {
        var childid = children[i].id;
        var childtype = children[i].type;
        if (childid == "id" && childtype == "text") {
            var content = "ID: " + children[i].value;
            textArray.push(content);
        } else {
            if (childid = "ticketName" && childtype == "text") {
                var content = "Reporter: " + children[i].value;
                textArray.push(content);
            } else if (childid == "header" && childtype == "text") {
                var content = "Header: " + children[i].value;
                textArray.push(content);
            }
        }
    }
    var status = divchild[0].style.backgroundColor;
    console.log(status);
    if (status == "red") {
        var content = "Staus: confirmed";
        textArray.push(content);

    } else {
        if (status == "green") {
            var content = "Staus:rejected";
            textArray.push(content);
        } else if (status == "black") {
            var content = "Staus: none";
            textArray.push(content);

        }
    }
    var children = divchild[1].childNodes;
    if (children.type == "text" && children.value != "") {
        var content = "description:" + children.valuevar content = "Staus: none";
        textArray.push(content);;
        textArray.push(content);
    }
    var myJsonString = JSON.stringify(textArray);
    console.log(myJsonString);
}

function exportAllTicket() {
    var children = document.getElementsByName("export");
    for (j = 0; j < children.length - 1; j++) {
        exportTicket(children[j]);
    }
}
var exportadd = core();
exportadd.register("exportTicket", exportTicket);
exportadd.register("exportAllTicket", exportAllTicket);