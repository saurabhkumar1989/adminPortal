fitness.filter('multiplefilter', function() {
    return function(data, userInput ,enableFilter) {
        var filteredArray = [];
        if (enableFilter) {
            angular.forEach(data, function(dataobj, key) {
              filteredArray.push(dataobj);
            })
          }
        else {
            angular.forEach(userInput, function(value, key) {
           	
              angular.forEach(data, function(dataobj, key) {

                if (dataobj.classes.indexOf(value) > -1 && filteredArray.indexOf(dataobj) == -1) {
                  filteredArray.push(dataobj);
                }
              })
            });
          }
      return filteredArray;
}
});