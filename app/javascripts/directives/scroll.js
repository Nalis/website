angular.module('website').
    directive("scroll", function ($window) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          angular.element($window).bind("scroll", function() {
            var header_nav, header;
            header_nav = angular.element(document.getElementById('header_navigation'));
            header = angular.element(element.find("header"));
                //console.log(header[0].offsetHeight);
            if (this.pageYOffset >= header[0].offsetHeight - 50) {

              scope.slimHeader = true;
              header_nav.addClass('fixed');
              //console.log('Scrolled below header.');

            } else {
              scope.slimHeader = false;
              header_nav.removeClass('fixed');
              //console.log('Header is in view.');
            }
            scope.$apply();
          });
      }}
    });