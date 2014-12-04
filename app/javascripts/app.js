angular.module('website', ['ngRoute']).
    config(
    ['$routeProvider', function($routeProvider) {
      $routeProvider.
          when('/', {
            controller: 'SubmitContactFormController',
            templateUrl: 'views/contact_form.html'
          }).
          otherwise({redirectTo: '/'});
    }]);

