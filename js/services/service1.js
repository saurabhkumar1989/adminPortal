//Service for first page
/* On page load */
/*For available search location */
fitness.factory('landFact1', [ '$resource', function($resource) {
	/*For getting the available location*/
	return $resource('https://jsonblob.com/api/jsonBlob/5614a4c3e4b01190df3ad5a8', {}, {
		getData : {
			method : 'GET',
			isArray : false,
			interceptor: {
	            response: function(response) {      
	                var result = response.resource;        
	                result.$status = response.status;
	                return response;
	            }
	        }
		}
	});
} ]);
/*For Sending the location data*/
fitness.factory('landFact', ['$resource', function($resource) {
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

	/* http://posttestserver.com/post.php */
	/* http://demo0412273.mockable.io/:location */



/* Services for second page */

/* On page load */
/*For available location data detail */
fitness.factory('listFact4', [ '$resource', function($resource) {
	/*For getting the available location*/
	return $resource('https://jsonblob.com/api/jsonBlob/5614a4c3e4b01190df3ad5a8', {}, {
		getData : {
			method : 'GET',
			isArray : false,
			interceptor: {
	            response: function(response) {      
	                var result = response.resource;        
	                result.$status = response.status;
	                return response;
	            }
	        }
		}
	});
} ]);

/* On page load */
/*For gym search detail */
fitness.factory('listFact1', [ '$resource', function($resource) {
	return $resource('https://jsonblob.com/api/jsonBlob/560a4272e4b01190df39f375', {}, {
		getData : {
			method : 'GET',
			isArray : false,
			interceptor: {
	            response: function(response) {      
	                var result = response.resource;        
	                result.$status = response.status;
	                return response;
	            }
	        }
		}
	});
} ]);


/* On button click */
/*For search result*/
fitness.factory('listFact2', ['$resource', function($resource) {
	return $resource('https://jsonblob.com/api/jsonBlob/560a4272e4b01190df39f375',{},{
		getData: {
		        method: 'GET',
		        interceptor: {
		            response: function(response) {      
		                var result = response.resource;        
		                result.$status = response.status;
		                return response;
		            }
		        }
		    } }); 
	}]);

/*On link Click*/
/*For Gym detail data*/
fitness.factory('listFact3', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',{},{
		gymdetailData: {
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



/* Services for third page */

/* On page load */
fitness.factory('listdetailFact', [ '$resource', function($resource) {
	return $resource('https://jsonblob.com/api/jsonBlob/56323700e4b01190df3dce74', {}, {
		getData : {
			method : 'GET',
			isArray : false,
	        interceptor: {
	            response: function(response) {      
	                var result = response.resource;        
	                result.$status = response.status;
	                return response;
	            }
	        }
		}
	});
} ]);

/*Service for gym on boarding*/
fitness.factory('gymFact', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',{},{
		sendData: {
		        method: 'POST',
		        headers: {'Content-Type': '"application/x-www-form-urlencoded; charset=utf-8"'},
		        interceptor: {
		            response: function(response) {      
		                var result = response.resource;        
		                result.$status = response.status;
		                return response;
		            }
		        }
		    } }); 
	}]);
/*Service for contact us*/
fitness.factory('contFact', ['$resource', function($resource) {
	return $resource('http://posttestserver.com/post.php',{},{
		sendData: {
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

/* *******************************Services for user portal page******************************* */

/* for user home page i.e. activities */
fitness.factory('userHomeFact', [ '$resource', function($resource) {
	return $resource('https://jsonblob.com/api/jsonBlob/562a63ede4b01190df3cd077', {}, {
		getData : {
			method : 'GET',
			isArray : false,
	        interceptor: {
	            response: function(response) {      
	                var result = response.resource;        
	                result.$status = response.status;
	                return response;
	            }
	        }
		}
	});
} ]);
/* Services for password change */
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
/* *******************************Services for account info data******************************* */
/* On page load */
fitness.factory('gymAccSetCtrlFact', [ '$resource', function($resource) {
	return $resource('https://jsonblob.com/api/jsonBlob/561d4f74e4b01190df3ba544', {}, {
		getData : {
			method : 'GET',
			isArray : false,
	        interceptor: {
	            response: function(response) {      
	                var result = response.resource;        
	                result.$status = response.status;
	                return response;
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