function Forum(){
    var i=0;

function createElement(tagName, parentElement, attList, style, label) {
    var element = document.createElement(tagName);
    var attrName, styleName, eventName;
    for (attrName in attList) {
        //element.setAttribute(attrName,attList[attrName]) ;
        element[attrName] = attList[attrName];
    }
    for (styleName in style) {
        element.style[styleName] = style[styleName];
    }
    if (label != null) {
        element.appendChild(document.createTextNode(label));
    }
    parentElement.appendChild(element);
    return element;
}
createElement("div", document.body, {id:"maindiv"}, { boxShadow:"0px 0px 50px #87CEEB" , position:"relative", margin:"auto", height:"auto", width:"60%"}, "");

(function insertId() {
    createElement("div", maindiv, {id:"div1"}, {position:"relative", height:"20%", width:"100%", borderBottom: "2px solid black"}, "");
    createElement("h1", div1, {id:"heading"}, {position:"absolute", width:"100%", textAlign:"center"}, "Online Forum");
    createElement("input", div1, {id:"userId", placeholder:"Please Enter Your ID"}, {position:"absolute", left:"5%", top:"60%", height:"20%", width:"50%"}, "");
    createElement("button", div1, {id:"go1"}, {position:"absolute", right:"30%", top:"60%", height:"20%", width:"10%", cursor: "pointer", backgroundColor:"white"}, "GO");
    createElement("span", div1, {id:"span"}, {position:"absolute", right:"10%", top:"60%", height:"20%", width:"20%", color:"red" }, "* Invalid Id");
})();

this.templateAdd=function() {
    createElement('div', maindiv, {id:"div2"}, {position:"relative", height:"15%", width:"100%", borderBottom:'2px solid black'}, "");
    createElement('input', div2, {id:'name', placeholder:'Name'}, {position:"absolute", left:"5%", top:"30%", height:'30%',width:'20%'}, "");
    createElement('input', div2, {id:'id', placeholder:'ID'}, {position:"absolute", left:"30%", top:"30%", height:'30%', width:'20%'},"");
    createElement('input', div2, {id:'role', placeholder:'ROLE'}, {position:"absolute", left:"55%", top:"30%", height:'30%',width:'20%'}, "");
    createElement('button', div2, {id:'add'}, {position:"absolute", left:"80%", top:"30%", height:'30%',width:'10%', cursor: "pointer", backgroundColor:"white"}, "ADD");
}

createElement('div', maindiv, {id:'div3'}, {position:'relative', width:'100%', display:"block"}, "");

 this.ticketView=function() {   
    var tick=createElement('div', div3, {id:'ticketDiv'+i}, {position:'relative', height:'30%', width:'100%', border:'1px solid red'}, "");
    var head=createElement('div', tick, {id:'divHeader'}, {position:'absolute', top:'6%', height:'50%', width:'100%', borderBottom:'1px solid blue'}, "");
    createElement('input', head, {id:'id1', placeholder:'id'}, {position:'absolute', left:"2%", top:"5%", height:'30%', width:'20%'}, "");
    createElement('input', head, {id:'header', placeholder:'Header'}, {position:'absolute', left:"27%", top:"5%", height:'30%', width:'30%'}, "");
    createElement('input', head, {id:'ticketName', placeholder:'Name'}, {position:'absolute', right:"7%", top:"5%", height:'30%', width:'20%'}, "");
    createElement('button', head, {id:'cancel'}, {position:'absolute', right:"2%", top:"5%", height:'20%', width:'3%', cursor: "pointer", backgroundColor:"white"}, "X");
    createElement('a', head, {id:'confirm'}, {position:'absolute', right:"8%", bottom:"35%", cursor:'pointer'}, "confirm");
    createElement('a', head, {id:"reject"}, {position:'absolute', right:"2%", bottom:"35%", cursor:'pointer'}, "/ reject");
    createElement('button', head, {id:'arrow'}, {position:"absolute", left:"48%", bottom:"0%", height:'15%',width:'3%', cursor: "pointer"}, "-");
    var desc=createElement('div', tick, {id:'divDescription'}, {position:'absolute', bottom:'10%', height:'40%', width:'100%'}, "");
    createElement('textarea', desc, {id:'textarea', placeholder:'Description'}, {position:'absolute', top:"10%", height:'80%', width:'80%', margin:'2%'}, "");
    createElement('button', tick, {id:'export1'}, {position:'absolute', right:'2%', top:'42%', height:'12%', width:'10%', cursor: "pointer", backgroundColor:"white"}, "Export");
    i++;
}
this.insertThread=function() {
    createElement("div", maindiv, {id:"div4"}, {position:"relative", marginTop:"5px", height:"30%", width:"100%", display:"block", border:'1px solid red'}, "");
    createElement("h4", div4, {id:"thread"}, {position:"absolute", width:"100%", textAlign:"center"}, "Insert A Thread");
    createElement("input", div4, {id:"threadHeader", placeholder:"Header"}, {position:"absolute", left:"2%", top:"30%", height:"15%", width:"30%"}, "");
    createElement("textarea", div4, {id:"description", placeholder:"Description"}, {position:"absolute", left:"2%", top:"50%", height:"35%", width:"70%"}, "");
    createElement("button", div4, {id:"go2"}, {position:"absolute", left:"75%", top:"65%", height:"20%", width:"5%", cursor: "pointer", backgroundColor:"white"}, "GO");
    createElement("button", div4, {id:"export2"}, {position:"absolute", right:"2%", bottom:"2%", height:"15%", width:"10%", cursor: "pointer", backgroundColor:"white"}, "Export");
}
};
userdetail.register("draw",new Forum());