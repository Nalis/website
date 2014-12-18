angular.module('website').
    controller('HeaderController', ['$scope', '$document',
      function($scope, $document) {
        var offset = 30, duration = 1000;
        $scope.scrollTo =  scrollTo;

        function scrollTo(element_id) { // Check whether $scope is necessary here
          var someElement;
          someElement = angular.element(document.getElementById(element_id));
          $document.scrollTopAnimated(someElement);
        }
      }]);