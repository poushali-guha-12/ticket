(function forum(){
    var i=0;

function createElement(tagName, parentElement, attList, style, events, label) {
    var element = document.createElement(tagName);
    var attrName, styleName, eventName;
    for (attrName in attList) {
        element[attrName] = attList[attrName];
    }
    for (styleName in style) {
        element.style[styleName] = style[styleName];
    }
    if (label != null) {
        element.appendChild(document.createTextNode(label));
    }
    for (eventName in events) {
            element.addEventListener(eventName, events[eventName]);
        }
    parentElement.appendChild(element);
    return element;
}
createElement("div", document.body, {id:"maindiv"}, { boxShadow:"0px 0px 50px #87CEEB" , position:"relative", margin:"auto", height:"auto", width:"60%"}, null, "");

function insertId() {
    createElement("div", maindiv, {id:"div1"}, {position:"relative", height:"20%", width:"100%", borderBottom: "2px solid black"},null, "");
    createElement("h1", div1, {id:"heading"}, {position:"absolute", width:"100%", textAlign:"center"}, null, "Online Forum");
    createElement("input", div1, {id:"userId", placeholder:"Please Enter Your ID"}, {position:"absolute", left:"5%", top:"60%", height:"20%", width:"50%"}, null, "");
    createElement("button", div1, {id:"go1"}, {position:"absolute", right:"30%", top:"60%", height:"20%", width:"10%", cursor: "pointer", backgroundColor:"white"}, null, "GO");
    createElement("span", div1, {id:"span"}, {position:"absolute", right:"10%", top:"60%", height:"20%", width:"20%", color:"red" }, null, "* Invalid Id");
}
insertId();

function templateAdd() {
    createElement('div', maindiv, {id:"div2"}, {position:"relative", height:"15%", width:"100%", borderBottom:'2px solid black'}, null, "");
    createElement('input', div2, {id:'name', placeholder:'Name'}, {position:"absolute", left:"5%", top:"30%", height:'30%',width:'20%'}, null, "");
    createElement('input', div2, {id:'id', placeholder:'ID'}, {position:"absolute", left:"30%", top:"30%", height:'30%', width:'20%'},null, "");
    createElement('input', div2, {id:'role', placeholder:'ROLE'}, {position:"absolute", left:"55%", top:"30%", height:'30%',width:'20%'}, null, "");
    createElement('button', div2, {id:'add'}, {position:"absolute", left:"80%", top:"30%", height:'30%',width:'10%', cursor: "pointer", backgroundColor:"white"}, null, "ADD");
}
templateAdd();

createElement('div', maindiv, {id:'div3'}, {position:'relative', width:'100%', display:"block"}, null, "");

function ticketView(id, header, name, description) {   
    var tick=createElement('div', div3, {id:'ticketDiv'+i}, {position:'relative', height:'30%', width:'100%', border:'1px solid red'}, null, "");
    var head=createElement('div', tick, {id:'divHeader'}, {position:'absolute', top:'6%', height:'50%', width:'100%'}, null, "");
    createElement('input', head, {id:'id1', value:id}, {position:'absolute', left:"2%", top:"5%", height:'30%', width:'20%'}, null, "");
    createElement('input', head, {id:'header', value:header}, {position:'absolute', left:"27%", top:"5%", height:'30%', width:'30%'}, null, "");
    createElement('input', head, {id:'ticketName', value:name}, {position:'absolute', right:"7%", top:"5%", height:'30%', width:'20%'}, null, "");
    createElement('button', tick, {id:'cancel'}, {position:'absolute', right:"2%", top:"10%", height:'10%', width:'3%', cursor: "pointer", backgroundColor:"white"},{click:function(){deleteTicket(this)}},  "X"); 
    createElement('a', tick, {id:'confirm'}, {position:'absolute', right:"8%", bottom:"62%", cursor:'pointer'}, null, "confirm");
    createElement('a', tick, {id:"reject"}, {position:'absolute', right:"2%", bottom:"62%", cursor:'pointer'}, null, "/ reject");
    createElement('button', head, {id:'arrow'}, {position:"absolute", left:"48%", bottom:"0%", height:'15%',width:'3%', cursor: "pointer"}, null, "-");
    var desc=createElement('div', tick, {id:'divDescription'}, {position:'absolute', bottom:'10%', height:'40%', width:'100%', display:"none"}, null, "");
    createElement('textarea', desc, {id:'textarea', value:description}, {position:'absolute', top:"10%", height:'80%', width:'80%', margin:'2%'}, null, "");
    createElement('button', tick, {id:'export1'}, {position:'absolute', right:'2%', top:'42%', height:'12%', width:'10%', cursor: "pointer", backgroundColor:"white"}, null, "Export");
    i++;

    document.getElementById('arrow').addEventListener("click",function() {
        console.log("ok");
        if(document.getElementById('divDescription').style.display = 'none')
            document.getElementById('divDescription').style.display = '';
    });
    document.getElementById('confirm').addEventListener("click",function(){
        console.log("ok1");
        document.getElementById('divHeader').style.background = "red";
    });
    document.getElementById('reject').addEventListener("click",function(){
        console.log("ok2");
        document.getElementById('divHeader').style.background = 'green';
    });
}
function deleteTicket(element){
    var p1=element.parentNode;
    var p2=p1.parentNode;
    p2.removeChild(p1);
}
ticketView();
ticketView();
ticketView();
ticketView();

function insertThread() {
    createElement("div", maindiv, {id:"div4"}, {position:"relative", height:"30%", width:"100%", display:"block", border:'1px solid red'},null,  "");
    createElement("h4", div4, {id:"thread"}, {position:"absolute", width:"100%", textAlign:"center"}, null, "Insert A Thread");
    createElement("input", div4, {id:"threadHeader", placeholder:"Header"}, {position:"absolute", left:"2%", top:"30%", height:"15%", width:"30%"},null,  "");
    createElement("textarea", div4, {id:"description", placeholder:"Description"}, {position:"absolute", left:"2%", top:"50%", height:"35%", width:"70%"},null,  "");
    createElement("button", div4, {id:"go2"}, {position:"absolute", left:"75%", top:"65%", height:"20%", width:"5%", cursor: "pointer", backgroundColor:"white"},null,  "GO");
    createElement("button", div4, {id:"export2"}, {position:"absolute", right:"2%", bottom:"2%", height:"15%", width:"10%", cursor: "pointer", backgroundColor:"white"}, null, "Export");
}
insertThread();
})();