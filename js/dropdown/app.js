'use strict';

angular.module('demoApp', ['nya.bootstrap.select'])
  .config(function(nyaBsConfigProvider) {
    nyaBsConfigProvider.setLocalizedText('en-us', {
      defaultNoneSelectionTpl: '<span class="label selecttext">Seletc Class</span>',
      noSearchResultTpl: '<span class="no-match-found">No Matched Result</span>'
    });
  })
  .controller('MainCtrl', function($scope){

      });
