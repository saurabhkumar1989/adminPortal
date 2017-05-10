/* First Page Controller */
fitness.controller('landCtrl', ['$scope', 'landFact', 'landFact1',
		function ($scope, locationData, landFact1) {
		$scope.sector = [];
		$scope.userLogin = false;
		/* For first Page to get  location for drop down */
		landFact1.getData(function (data) {
			/* write a function for below */
			if (data.status === 200) {
				/*Data for drop down*/
				$scope.sector = data.data.location;
				/*console.log($scope.sector);*/
			} else if (data.status === 500) {
				console.log("Server Error");
			} else if (data.status === 404) {
				console.log("Page Not Found");
			};
		}, function (err) {
			console.log(err);

		});


		$scope.sendLocation = function () {
			// Here is the actual call... we just put it on a button click.

			/*If else block to check whether user entered any location or not*/
			if ($scope.selectedlocation != null) {
				console.log("location entered")

				locationData.save($scope.selectedlocation, function (successResult) {
					/* write a function for below */
					console.log($scope.sector);
					if (successResult.status === 200) {
						console.log("Data Saved");
						/*location.href = "listing.html";*/
						console.log($scope.selectedlocation.originalObject.code);
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
				console.log("Enter Location Please")
			}

		}
		}]);
/* Second Page Controller */
fitness.controller('listCtrl', [
		'$scope',
		'listFact1',
		'listFact2',
		'listFact3',
		'usSpinnerService',
		'listFact4',
		function ($scope, listFact1, listFact2, listFact3, usSpinnerService, listFact4) {
		/*scope.busy is for hide and show the filter suggestion*/
		$scope.busy = true;
		$scope.userLogin = true;
		$scope.sector = [];
		/*	 For second Page to get  location for drop down */
		listFact4.getData(function (data) {
			/* write a function for below error handling*/
			if (data.status === 200) {
				/*Data for drop down*/
				$scope.sector = data.data.location;
				console.log($scope.sector);
			} else if (data.status === 500) {
				console.log("Server Error");
			} else if (data.status === 404) {
				console.log("Page Not Found");
			};
		}, function (err) {
			console.log(err);

		});

		/* On page load that will get user search result data only one time. When user click 
		 gymDetail function will be called*/
		listFact1.getData(function (data) {
			$scope.startSpin();
			/* write a function for below */
			if (data.status === 200) {
				$scope.testData = data.data;
				console.log($scope.testData);
				$scope.stopSpin();
			} else if (data.status === 500) {
				console.log("Server Error");
				$scope.stopSpin();

			} else if (data.status === 404) {
				console.log("Page Not Found");
				$scope.stopSpin();
				/* location.href = "pagenotFound.html"; */
			};
			$scope.stopSpin();
		}, function (err) {
			console.log(err);
			$scope.stopSpin();
		});


		/*For Detail Gym detail click*/
		$scope.gymDetail = function (gymId) {
			console.log(gymId);
			listFact3.gymdetailData(gymId, function (data) {
				if (data.status === 200) {
					console.log("Data Posted");
					location.href = "listing-details.html";
				} else if (data.status === 500) {
					console.log("Server Error");

				} else if (data.status === 404) {
					console.log("Page Not Found");
					/* location.href = "pagenotFound.html"; */
				}
			});

		}


		/*For location button click*/
		$scope.sendLocation = function () {
				$scope.startSpin();
				if ($scope.selectedlocation != null) {
					console.log($scope.selectedlocation.originalObject.code);
					// Here is the actual call... we just put it on a button click.
					listFact2.getData(function (successResult) {
						/* write a function for below */
						if (successResult.status === 200) {
							$scope.testData = successResult.data;
							console.log($scope.testData);
							$scope.stopSpin();
						} else if (data.status === 500) {
							console.log("Server Error");
							$scope.stopSpin();

						} else if (data.status === 404) {
							console.log("Page Not Found");
							$scope.stopSpin();
							/* location.href = "pagenotFound.html"; */
						};
						$scope.stopSpin();
					}, function (err) {
						console.log(err);
						$scope.stopSpin();
					});
				} else {
					console.log("Please Enter Location");
					$scope.stopSpin();
				}



			}
			/*For Filter Enable*/
		$scope.enableFilter = true;
		$scope.click1 = function () {
			console.log("user click");
			$scope.enableFilter = false;

		};
		/* For spinner */
		$scope.startSpin = function () {
			$scope.busy = true;
			usSpinnerService.spin('spinner-1');
			console.log("start call");
		}
		$scope.stopSpin = function () {
				$scope.busy = false;
				usSpinnerService.stop('spinner-1');
				console.log("stop call");

			}
			/* Spinner Ends */

		/* For option in drop down */
		$scope.options = ['Aerobics', 'Crossfit', 'Dance', 'Free Weights',
					'Kettlebell', 'Pilates', 'Rowing', 'TRX', 'Weight',
					'Training', 'Yoga', 'Zumba'];
		$scope.data = {
			multipleSelect: []
		};

		}]);

/* listing detail  Controller */
fitness.controller('listDtailCtrl', ['$scope', 'listdetailFact',
		function ($scope, listdetailData) {
		$scope.isHide = true;
		$scope.userLogin = true;
		$scope.date21 = new Date().toDateString();
		$scope.testData = [];
		$scope.options = ['Aerobics', 'Crossfit', 'Dance', 'Free Weights',
						'Kettlebell', 'Pilates', 'Rowing', 'TRX', 'Weight',
						'Training', 'Yoga', 'Zumba'];
		$scope.data = {
			repeatSelect: null,
			availableOptions: [
				{
					id: '1',
					name: '5.00 AM to 5.30 AM'
				},
				{
					id: '2',
					name: '5.30 AM to 6.00 AM'
				},
				{
					id: '3',
					name: '6.00 AM to 6.30 AM'
				},
				{
					id: '4',
					name: '6.30 AM to 7.00 AM'
				},
				{
					id: '5',
					name: '7.00 AM to 7.30 AM'
				},
				{
					id: '6',
					name: '7.30 AM to 8.00 AM'
				},
				{
					id: '7',
					name: '5.00 PM to 5.30 PM'
				},
				{
					id: '8',
					name: '5.30 PM to 6.00 PM'
				},
				{
					id: '9',
					name: '6.00 PM to 6.30 PM'
				},
				{
					id: '10',
					name: '6.30 PM to 7.00 PM'
				},
				{
					id: '11',
					name: '7.00 PM to 7.30 PM'
				},
				{
					id: '12',
					name: '7.30 PM to 8.00 PM'
				},

		    ],
		};
		listdetailData.getData(function (data) {
			/* write a function for below */
			if (data.status === 200) {
				$scope.testData = data;
				if ($scope.testData.data.activityType == "timeBound") {
					$scope.isHide = false;
				}

				/* ******************************Logic for map data********************************************** */
				/*console.log($scope.testData.data.geoLoc);
				console.log($scope.testData.data.shrtText);
				console.log($scope.testData.data.priAddress);*/
				var gyms = $scope.testData.data.geoLoc;
				var gymName = $scope.testData.data.shrtText;
				var gymAddr = $scope.testData.data.priAddress;
				var mapOptions = {
					zoom: 16,
					center: new google.maps.LatLng(gyms[0].lat, gyms[0].long),
					mapTypeId: google.maps.MapTypeId.TERRAIN,
					disableDefaultUI: true,
					scrollwheel: false
				}

				$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

				$scope.markers = [];

				var infoWindow = new google.maps.InfoWindow();

				var createMarker = function (info) {

					var marker = new google.maps.Marker({
						map: $scope.map,
						position: new google.maps.LatLng(info.lat, info.long),
						title: gymName
					});
					marker.content = '<div class="infoWindowContent">' + gymAddr + '</div>';

					google.maps.event.addListener(marker, 'click', function () {
						infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
						infoWindow.open($scope.map, marker);
					});

					$scope.markers.push(marker);

				}

				for (i = 0; i < gyms.length; i++) {
					createMarker(gyms[i]);
				}

				$scope.openInfoWindow = function (e, selectedMarker) {
					e.preventDefault();
					google.maps.event.trigger(selectedMarker, 'click');
				}

			} else if (data.status === 500) {
				console.log("Server Error");

			} else if (data.status === 404) {
				console.log("Page Not Found");
				/* location.href = "pagenotFound.html"; */
			};

		});

		}]);




/* gymOnboarding Controller */
fitness.controller('gymonboardCtrl', ['$scope', 'gymFact', function ($scope, gymFact) {
	$scope.userLogin = true;

	$scope.gymdataSend = function () {
		if ($scope.gym.continfo != null && $scope.gym.detail.name != null && $scope.gym.detail.addr[0] != null && $scope.gym.detail.addr[2] != null && $scope.gym.detail.addr[3] != null && $scope.gym.detail.timing != null) {
			console.log("Req Info entered")
			var time = [];
			angular.forEach($scope.gym.detail.timing, function (value, key) {
				var temp = value[0] + "," + value[1] + "," + value[2];
				/*console.log(temp);*/
				this.push(temp);
			}, time);
			console.log("Total data")
			console.log($scope.gym);
			console.log("time new data");
			console.log(time);

			//$scope.gym.detail.timing = time;
			console.log($scope.gym.detail.timing);
			var gymdata = {
				continfo: {},
				detail: {
					actvy: {},
					addr: {},
					contus: {},
					name: "",
					facilty: {},
					timing: []
				}
			}
			gymdata.continfo = $scope.gym.continfo;
			gymdata.detail.actvy = $scope.gym.detail.actvy;
			gymdata.detail.addr = $scope.gym.detail.addr;
			gymdata.detail.contus = $scope.gym.detail.contus;
			gymdata.detail.name = $scope.gym.detail.name;
			gymdata.detail.facilty = $scope.gym.detail.facility;
			gymdata.detail.timing = time;
			gymFact.sendData(gymdata.detail, function (data) {
				console.log('data send');
				/* write a function for below */
				if (data.status === 200) {
					$scope.testData = data;
					console.log(data);
				} else if (data.status === 500) {
					console.log("Server Error");

				} else if (data.status === 404) {
					console.log("Page Not Found");
					/* location.href = "pagenotFound.html"; */
				};

			}, function (err) {
				console.log("unkown error");
			});
		} else {
			/*Here logic if user doesn't enter location*/
			window.alert("Please Enter All Required Information");
			console.log("Enter All Required Field")
		}
	}
		}]);

// Contact us controller
fitness.controller('contactusCtrl', ['$scope', 'contFact', function ($scope, contactFact) {
		$scope.userLogin = true;
		$scope.submitForm = function () {
			// Here is the actual call... we just put it on a button click.

			/*If else block to check whether user entered all fields or not*/
			if (true) {
				console.log("entered")

				contactFact.sendData($scope.user, function (data) {
					/* write a function for below */
					console.log($scope.user);
					if (data.status === 200) {
						console.log("Data Saved");
						console.log(data);
					} else if (data.status === 500) {
						console.log("Server Error");
					} else if (data.status === 404) {
						console.log("Page Not Found");
						/* location.href = "pagenotFound.html"; */
					};
				}, function (err) {
					console.log("unkown error");
				});
			} else {
				/*Here logic if user doesn't enter location*/
				console.log("Enter All Required Field")
			}

		}
}
]);

//Privacy controller
fitness.controller('privacyCtrl', ['$scope' /*, 'contFact'*/ , function ($scope /*, contactFact*/ ) {
		$scope.userLogin = true;
}
]);

/* ***********************User portal controller*********************** */



/* User portal home controller Activities data */


/* On Page load */
fitness.controller('userHomeCtrl', ['$scope', 'userHomeFact', function ($scope, userHomeFact) {
		$scope.userLogin = true;
		userHomeFact.getData(function (data) {
			/* write a function for below */

			if (data.status === 200) {
				console.log("Data Saved");
				$scope.userActvdata = data;

			} else if (data.status === 500) {
				console.log("Server Error");
			} else if (data.status === 404) {
				console.log("Page Not Found");

			};
		}, function (err) {
			console.log("unkown error");
		});

		/*On buy again button click*/
		$scope.buyAgain = function (spId) {
			console.log(spId);
			/*Here logic where i need to redirect*/
		}
}
]);
/* Gym Owner controller for password change data */
fitness.controller('gympasschgeCtrl', ['$scope', 'gympasschgeCtrlFact',
		function ($scope, transDataUpdate) {
		$scope.passwrdUpdt = function () {
			// Here is the actual call... we just put it on a button click.


			if ($scope.user.passwrdData != null) {
				console.log("Data Entered")
				transDataUpdate.save($scope.user.passwrdData, function (successResult) {
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
				console.log("data not enter")
				console.log($scope.user.passwrdData)

			}

		}
		}]);

/* Gym Owner controller for account setting */
fitness.controller('gymAccSetCtrl', ['$scope', 'gymAccSetCtrlFact', 'gymAccSetCtrlFact1',
		function ($scope, accData, accDataUpdate) {
		$scope.updateData = function () {
				// Here is the actual call... we just put it on a button click.

				/*If else block to check whether user entered any location or not*/
				if ($scope.person.updated != null) {
					console.log("Data Entered")

					accDataUpdate.save($scope.person, function (successResult) {
						/* write a function for below */

						if (successResult.status === 200) {
							console.log("Data Saved");
							/*location.href = "listing.html";*/
							console.log($scope.person);
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
					console.log("Enter All Fields")

				}

			}
			/*	On page load, this will bring the current name and mobile number*/
		accData.getData(function (data) {
			/* write a function for below */
			if (data.status === 200) {

				$scope.person = data;
				console.log($scope.person);
			} else if (data.status === 500) {
				console.log("Server Error");

			} else if (data.status === 404) {
				console.log("Page Not Found");
				/* location.href = "pagenotFound.html"; */
			};

		});
		}]);