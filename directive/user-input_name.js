myApp.directive(“userName”, function () { // search result normalized to search-result
	return { // that return will return our directive
		template:; //html code that we want to return
		replace: true; // by default false, best is to make it true.
		restrict: “AE”; // by default is “AE”,
	}
});