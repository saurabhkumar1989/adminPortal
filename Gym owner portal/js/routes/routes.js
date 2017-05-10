// configure our routes
	fitness.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'pages/gym_owner_home.html',
				controller  : 'gymhomeCtrl'
			})

			// route for the transaction page
			.when('/transaction', {
				templateUrl : 'pages/gym_owner_transaction.html',
				controller  : 'gymTransaction'
			})

			// route for the password_change page
			.when('/password_change', {
				templateUrl : 'pages/gym_owner_password_change.html',
				controller  : 'gympasschgeCtrl'
			})
		// route for the account_setting page
		.when('/account_setting', {
			templateUrl : 'pages/gym_owner_account_setting.html',
			controller  : 'gymAccSetCtrl'
		})
		.otherwise({
        redirectTo: '/home'
      });		
	});	