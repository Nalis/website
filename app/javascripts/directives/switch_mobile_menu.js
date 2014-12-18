angular.module('website').directive('switchMobileMenu',function($window){
  return {
    restrict : "A",
    link : function(scope,elem,attrs){
      angular.forEach(['switchFlag', 'switchWidth'], function(value) {
        if(attrs[value] === undefined) {
          console.log(value + ' is missing for switchMobileMenu!');
          throw new TypeError(value + ' is missing for switchMobileMenu!');
        }
      });

      var resize = function() {
        var winWidth = $window.innerWidth;
        if(winWidth > attrs['switchWidth'] && !scope[attrs['switchFlag']]) {
          scope[attrs['switchFlag']] = true;
          scope.$apply();
        }
      };

      //var watchForChange = function() {
      //  return scope.$parent.data.overlaytype;
      //}
      //scope.$watch(watchForChange,function() {
      //  $window.setTimeout(function() {
      //    resize();
      //  }, 1);
      //});

      angular.element($window).bind('resize',function(e){
        resize();
      });
    }
  };
});