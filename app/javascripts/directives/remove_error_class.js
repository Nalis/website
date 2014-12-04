angular.module('website').
    directive('removeErrorInput', function () {
      return {
        restrict: 'A',
        link: function(scope, element) {
          element.bind("change" , function(e){
            element.removeClass("incorrect");
          });
        }
      }
    });