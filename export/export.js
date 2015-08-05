
function exportTicket(element){
	var textArray=[];
	var parent=element.parentNode;
	children=parent.childNodes;
   // alert(children.length);
	for(i=0;i<children.length;i++){
		var childtype=children[i].type;
		//alert(childtype);
		 if(childtype=="text"){
		 	var content=children[i].value;
		 	textArray.push(content);

		}
		if(childtype=="a"){
			console.log(a.value);

		}
	}
	var myJsonString = JSON.stringify(textArray);
	console.log(myJsonString);


}

function exportAllTicket(element){
	var children=document.getElementsByName("export");
	alert(children.length);
	for(i=0;i<children.length;i++){
		alert("poushali");
		(function() {
            exportTicket(children[i]);
        })();

	}
	
}
function check(element)
{
	element.value="true";
}