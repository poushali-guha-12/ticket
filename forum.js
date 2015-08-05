function createElement(tagName, parentElement, attList, style, label) {
    var element = document.createElement(tagName), attrName, styleName, eventName;
    parentElement.appendChild(element);
    for (attrName in attList) {
        element[attrName] = attList[attrName];
    }
    for (styleName in style) {
        element.style[styleName] = style[styleName];
    }
    if (label != null) {
        element.appendChild(document.createTextNode(label));
    }
    
    return element;
}
createElement("div", document.body, {id:"maindiv"}, {boxShadow: "0px 0px 50px #87CEEB",position:"relative", margin:"auto", height:"100%", width:"60%", border: "3px solid black"}, "");

(function insertId() {
    createElement("div", maindiv, {id:"div1"}, {position:"absolute", height:"20%", width:"100%", borderBottom: "2px solid black"}, "");
    createElement("h1", div1, {id:"heading"}, {position:"absolute", width:"100%", textAlign:"center"}, "Online Forum");
    createElement("input", div1, {id:"userId", placeholder:"Please Enter Your ID"}, {position:"absolute", left:"5%", top:"60%", height:"20%", width:"50%"}, "");
    createElement("button", div1, {id:"go1"}, {position:"absolute", right:"30%", top:"60%", height:"20%", width:"10%", cursor: "pointer"}, "GO");
    createElement("span", div1, {id:"span"}, {position:"absolute", right:"10%", top:"60%", height:"20%", width:"20%", color:"red" }, "* Invalid Id");
})();

(function templateAdd() {
    createElement('div', maindiv, {id:"div2"}, {position:"absolute", top:"20%", height:"15%", width:"100%", borderBottom:'2px solid black'}, "");
    createElement('input', div2, {id:'name', placeholder:'Name'}, {position:"absolute", left:"5%", top:"30%", height:'30%',width:'20%'}, "");
    createElement('input', div2, {id:'id', placeholder:'ID'}, {position:"absolute", left:"30%", top:"30%", height:'30%', width:'20%'},"");
    createElement('input', div2, {id:'role', placeholder:'ROLE'}, {position:"absolute", left:"55%", top:"30%", height:'30%',width:'20%'}, "");
    createElement('button', div2, {id:'add'}, {position:"absolute", left:"80%", top:"30%", height:'30%',width:'10%', cursor: "pointer"}, "ADD");
})();

(function ticketView() {
  var a=createElement('div', maindiv, {id:'div3'}, {position:'absolute', top:"35%", height:'30%', width:'100%', borderBottom:'2px solid black'}, "");
    createElement('div', div3, {id:'divHeader'}, {position:'absolute', top:'6%', height:'30%', width:'100%', borderBottom:'1px solid blue'}, "");
    createElement('input', divHeader, {id:'id1', placeholder:'id'}, {position:'absolute', left:"2%", top:"10%", height:'40%', width:'20%'}, "");
    createElement('input', divHeader, {id:'header', placeholder:'header'}, {position:'absolute', left:"27%", top:"10%", height:'40%', width:'20%'}, "");
    createElement('input', divHeader, {id:'ticketName', placeholder:'Name'}, {position:'absolute', right:"10%", top:"10%", height:'40%', width:'20%'}, "");
    createElement('button', divHeader, {id:'cancel'}, {position:'absolute', right:"4%", top:"10%", height:'40%', width:'4%', cursor: "pointer"}, "X");
    createElement('a', divHeader, {id:'confirm', value:"true"}, {position:'absolute', right:"11%", bottom:"10%", cursor:'pointer'}, "confirm");
    createElement('a', divHeader, {id:"reject", value:"false"}, {position:'absolute', right:"5%", bottom:"10%", cursor:'pointer'}, "/ reject");
    createElement('button', divHeader, {id:'arrow'}, {position:"absolute", left:"45%", bottom:"0%", height:'30%',width:'5%', cursor: "pointer"}, "-");

    createElement('span', div3, {id:'divDescription'}, {position:'absolute', bottom:'10%', height:'50%', width:'100%',display:'none'}, "");
    createElement('textarea', divDescription, {id:'textarea', placeholder:'Description'}, {position:'absolute', height:'70%', width:'80%', margin:'2%'}, "");
    
    createElement('button', div3, {id:'export1'}, {position:'absolute', right:'5%', bottom:'2%', height:'15%', width:'10%', cursor: "pointer"}, "Export");
   
     
    document.getElementById('arrow').addEventListener("click",function(){
        console.log("ok");
                  if(document.getElementById('divDescription').style.display = 'none')
                  document.getElementById('divDescription').style.display = '';
   //a=new set();

    });
    document.getElementById('confirm').addEventListener("click",function(){
        console.log("ok1");
                 //if(document.getElementById('divDescription').style.display = 'none')
                  document.getElementById('divHeader').style.background = "red";
   //a=new set();

    });
    document.getElementById('reject').addEventListener("click",function(){
        console.log("ok2");
                  //if(document.getElementById('divDescription').style.display = 'none')
                  document.getElementById('divHeader').style.background = 'green';
   //a=new set();

    });
})();

(function insertThread() {
    createElement("div", maindiv, {id:"div4"}, {position:"absolute", bottom:"1%", height:"30%", width:"100%", borderBottom: "2px solid black"}, "");
    createElement("h4", div4, {id:"thread"}, {position:"absolute", width:"100%", textAlign:"center"}, "Insert A Thread");
    createElement("input", div4, {id:"threadHeader", placeholder:"Header"}, {position:"absolute", left:"2%", top:"30%", height:"15%", width:"30%"}, "");
    createElement("textarea", div4, {id:"description", placeholder:"Description"}, {position:"absolute", left:"2%", top:"50%", height:"35%", width:"70%"}, "");
    createElement("button", div4, {id:"go2"}, {position:"absolute", left:"75%", top:"65%", height:"20%", width:"5%", cursor: "pointer"}, "GO");
    createElement("button", div4, {id:"export2"}, {position:"absolute", right:"2%", bottom:"2%", height:"15%", width:"10%", cursor: "pointer"}, "Export");
})();


function set()
{
    debugger;
    this.style.color="red";
}


console.log("k");