var userdetail=core();
function User(){
	this.getName=function (id){
		//var name=userdetail.getValue("forum_json",(getUser(id,"name")));
		return name;
	}
	this.getRole=function (id){
		//var role=userdetail.getValue("forum_json",(getUser(id,"role")));
		return role;
	}
	this.isPrivilege=function (id){
		var privilege=[],role;
		role=getRole(id);
		if( role=="master"||role=="reporter"){
			privilege.push("add");
		}
		if( role=="master"){
			privilege.push("delete");
		}
		if( role=="master"||role=="reporter" || role=="asignee"){
			privilege.push("show");
		}
		if( role=="admin"){
			privilege.push("insertUser");
		}
		return privilege;
	}
	this.users=function (id){
		var user={};
		//user[id]=userdetail.getValue("forum_json");
		return user;
	}
}
var user=new User();
userdetail.register("user_details",user);