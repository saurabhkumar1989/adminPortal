/* *******************************Services for account info data******************************* */
/* On page load */
fitness.factory('gymAccSetCtrlFact', [ '$resource', function($resource) {
	return $resource('https://raw.githubusercontent.com/saurabhkumar1989/jsonData/master/gymowner/personalInfo.json', {}, {
		getData : {
			method : 'GET',
			isArray : false,
	        interceptor: {
	            response: function(response) {      
	                return (response);
	            }
	        }
		}
	});
} ]);
/*that used to update information on server*/
fitness.factory('gymAccSetCtrlFact1', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',
			{},{save: {
		        method: 'POST',
		        interceptor: {
		            response: function(response) {      
		                var result = response.resource;        
		                result.$status = response.status;
		                return response;
		            }
		        }
		    } }); 
	}]);
	
	
/* *******************************Services for transaction data******************************* */
/* On Page Load */
fitness.factory('gymTranCtrlFact', [ '$resource', function($resource) {
	return $resource('https://raw.githubusercontent.com/saurabhkumar1989/jsonData/master/gymowner/transaction.json', {}, {
		getData : {
			method : 'GET',
			isArray : false,
	        interceptor: {
	            response: function(response) {
	                return response;
	            }
	        }
		}
	});
} ]);
/*that used to update information on server*/
fitness.factory('gymTranCtrlFact1', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',
			{},{save: {
		        method: 'POST',
		        interceptor: {
		            response: function(response) {      
		                var result = response.resource;        
		                result.$status = response.status;
		                return response;
		            }
		        }
		    } }); 
	}]);

	
	
	
/* *******************************Services for gym owner home page data******************************* */
/* On Page Load */
fitness.factory('gymHomeCtrlFact', [ '$resource', function($resource) {
	return $resource('https://raw.githubusercontent.com/saurabhkumar1989/jsonData/master/gymowner/home.json', {}, {
		getData : {
			method : 'GET',
			isArray : false,
	        interceptor: {
	            response: function(response) {
					//console.log(response.data);
	                return (response);
	            }
	        }
		}
	});
} ]);
/*that used to update information on server*/
fitness.factory('gymHomeCtrlFact1', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',
			{},{save: {
		        method: 'POST',
		        interceptor: {
		            response: function(response) {      
		                var result = response.resource;        
		                result.$status = response.status;
		                return response;
		            }
		        }
		    } }); 
	}]);

	
	
	
/* *******************************Services for password change******************************* */
fitness.factory('gympasschgeCtrlFact', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',
			{},{save: {
		        method: 'POST',
		        interceptor: {
		            response: function(response) {      
		                var result = response.resource;        
		                result.$status = response.status;
		                return response;
		            }
		        }
		    } }); 
	}]);
