var fitness = angular.module('fitness', ['ngTouch'	,'angucomplete-alt','ngResource','nya.bootstrap.select','angularSpinner'])
	.config(function(nyaBsConfigProvider) {
      nyaBsConfigProvider.setLocalizedText('en-us', {
      defaultNoneSelectionTpl: '<span class="label selecttext">Seletc Class</span>',
      noSearchResultTpl: '<span class="no-match-found">No Matched Result</span>',
	  selectAll: 'Select All',
      deselectAll: 'Deselect All'
    });
  });