angular.module('website', ['ngRoute', 'duScroll']).
    config(
    ['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
/*
      $routeProvider.
          when('/', {
            controller: 'SubmitContactFormController',
            templateUrl: 'views/contact_form.html'
          }).
          when('/about', {
            templateUrl: 'views/about.html'
          }).
          when('/contacts', {
            templateUrl: 'views/contacts.html'
          }).
          when('/open-source', {
            templateUrl: 'views/open-source.html'
          }).
          when('/technologies', {
            templateUrl: 'views/technologies.html'
          });
          */
    }]);

