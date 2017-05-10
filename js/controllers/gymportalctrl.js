/* Gym Owner controller for account setting */
fitness.controller('gymAccSetCtrl', ['$scope', 'gymAccSetCtrlFact', 'gymAccSetCtrlFact1',
		function ($scope, gymOwnerData, ownerDataUpdate) {
		$scope.updateData = function () {
				// Here is the actual call... we just put it on a button click.
				/*If else block to check whether user entered any location or not*/
				if ($scope.person.updated != null) {
					console.log("Data Entered")
					ownerDataUpdate.save($scope.person, function (successResult) {
						/* write a function for below */
						if (successResult.status === 200) {
							//console.log("Data Saved");
							/*location.href = "listing.html";*/
							//console.log($scope.person);
						} else if (successResult.status === 500) {
							//console.log("Server Error");
						} else if (successResult.status === 404) {
							
							//console.log("Page Not Found");
							/* location.href = "pagenotFound.html"; */
						};
					}, function (err) {
						console.log("unkown error");
					});
				} else {
					/*Here logic if user doesn't enter location*/
					console.log("Enter All Fields")
				}
			}
			/*	On page load, this will bring the current name and mobile number*/
		gymOwnerData.getData(function (response) {
			/* write a function for below */
			if (response.status === 200) {
				$scope.gymOwner = response.data.gymOwnerInfo;
			} else if (response.status === 500) {
				//to do server error
			} else if (response.status === 404) {
				//to do for 404
				/* location.href = "pagenotFound.html"; */
			};
		});
		}]);


/* Gym Owner controller for transactional */
fitness.controller('gymTransaction', ['$scope', 'gymTranCtrlFact', 'gymTranCtrlFact1',
		function ($scope, transData, transDataUpdate) {
		//$scope.selected.year=1;
		//console.log($scope)
		$scope.updateData = function () {
				// Here is the actual call... we just put it on a button click.
				/*If else block to check whether user entered any location or not*/
				if ($scope.selected != null) {
					console.log("data enter")
					transDataUpdate.save($scope.selected, function (successResult) {
						/* write a function for below */
						if (successResult.status === 200) {
							console.log("Data Saved");
							console.log(successResult)
								/*location.href = "listing.html";*/
							console.log($scope);
						} else if (successResult.status === 500) {
							console.log("Server Error");
						} else if (successResult.status === 404) {
							console.log("Page Not Found");
							/* location.href = "pagenotFound.html"; */
						};
					}, function (err) {
						console.log("unkown error");
					});
				} else {
					/*Here logic if user doesn't enter location*/
					console.log("Enter Data and Time")
					alert("Select Data and Time")
				}
			}
			/*	On page load, this will bring the current name and mobile number*/
		transData.getData(function (response) {
			/* write a function for below */
			if (response.status === 200) {
				$scope.transData = response.data.gymOwnertran;
				$scope.amountPaid = response.data.moneyPaid;
				$scope.amountRemain = response.data.moneyReamin;
				console.log($scope.transData);
			} else if (response.status === 500) {
				console.log("Server Error");
			} else if (response.status === 404) {
				console.log("Page Not Found");
				/* location.href = "pagenotFound.html"; */
			};
		});
		}]);

/* Gym Owner controller for home page data (Passes Sold)*/
fitness.controller('gymhomeCtrl', ['$scope', 'gymHomeCtrlFact', 'gymHomeCtrlFact1',
		function ($scope, passData, passUpdate) {
		/*Function call when pass deletion*/
		$scope.passUsed = function (passId) {
			console.log(passId);
				// Here is the actual call... we just put it on a button click.
				if (true) {
					passUpdate.save(passId, function (response) {
						if (response.status === 200) {
							console.log("Data Saved");
								/*location.href = "listing.html";*/
							console.log($scope);
						} else if (response.status === 500) {
							console.log("Server Error");
						} else if (response.status === 404) {
							console.log("Page Not Found");
							/* location.href = "pagenotFound.html"; */
						};
					}, function (err) {
						console.log(err);
					});
				} else {
					/*Here logic if user doesn't enter location*/
					console.log("Ezsdsad")
				}
			}
		/*	On page load, this will bring the current pass sold and sor*/
		passData.getData(function (response) {
			if (response.status === 200) {
				$scope.gymHome = response.data.gymOwnerHome;
			} else if (response.status === 500) {
				//console.log("Server Error");
			} else if (response.status === 404) {
				//console.log("Page Not Found");
				/* location.href = "pagenotFound.html"; */
			};
		});
		}]);

/* Gym Owner controller for password change data */
fitness.controller('gympasschgeCtrl', ['$scope', 'gympasschgeCtrlFact',
		function ($scope, transDataUpdate) {
		$scope.passwrdUpdt = function () {
			// Here is the actual call... we just put it on a button click.


			if ($scope.user.passwrdData != null) {
				//console.log("Data Entered")
				transDataUpdate.save($scope.user.passwrdData, function (successResult) {
					/* write a function for below */
					if (successResult.status === 200) {
						//console.log("Data Saved");
						//console.log(successResult)
							/*location.href = "listing.html";*/
						//console.log($scope);
					} else if (successResult.status === 500) {
						//console.log("Server Error");

					} else if (successResult.status === 404) {
						//console.log("Page Not Found");
						/* location.href = "pagenotFound.html"; */

					};
				}, function (err) {
					console.log("unkown error");
				});
			} else {
				/*Here logic if user doesn't enter location*/
				//console.log("data not enter")
				//console.log($scope.user.passwrdData)

			}

		}
		}]);