var userdetail=core();
function User(){
	this.getName=function (id){
		var name=userdetail.getValue("forum_json");
		return name.getUser(id,"name");
	}
	this.getRole=function (id){
		var role=userdetail.getValue("forum_json");
		return role.getUser(id,"role");
	}
	this.isPrivilege=function (id){
		var privilege=[],role;
		debugger;
		role=this.getRole(id);
		console.log(role);
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
userdetail.register("user_details",new User());