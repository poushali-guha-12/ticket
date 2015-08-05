function forum_json() {

	var forum = {

		users : [ { "id" : "chinmoy@fusioncharts.com", "name" : "chinmoy", "role" : "master" } ,
				  { "id" : "kisan@fusioncharts.com", "name" : "kisan", "role" : "admin" }
				] , 
		//For future use and reference
		//tickets : []
	} ;


	this.setUser = function ( id, name, role ) {
	   
	   var user = { "id" : id , "name" : name, "role" : role };
	   forum.users.push( user ) ;
	 }

	this.setTicket = function( ticket ) {
		//For future use and reference
	 	//forum.tickets.push( ticket );
	 	console.log(ticket);
	 }

	this.getUser = function ( id, requirement ) {
		for( var i = 0 ; i < forum.users.length ; i++ ) {
	        if( forum.users[i].id == id ) {
	          	if( requirement === "name" ){
	          		return forum.users[i].name;
	          	}
	          	else if( requirement === "role" ){
	          		return forum.users[i].role;
	          	}
	          	else if( requirement === "details" ){
	          		return forum.users[i];
	          	}
	        }
	        else
	        {
	        	return "Id not matching!!";
	        }
		}
	}	
	//For future use and reference
	/*this.getTicket = function( id ) {
        for( var i = 0; i<forum.tickets.length; i++ ) {
	        if( forum.tickets[i].id == id ) {
	             		return forum.tickets[i];
	        }
	        else
	        {
	        	return "Id not matching!!";
	        }
		}
		
	} */
}

