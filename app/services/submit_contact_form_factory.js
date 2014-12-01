angular.module('website').
  factory('submit_contact_form_factory', function($http) {
        var CONFIG = {};
        CONFIG.SUBMIT_CONTACT_FORM = '/contact.php';

        var dataFactory = {};

        dataFactory.processContactForm = function (form) {
            return $http.post(
                CONFIG.SUBMIT_CONTACT_FORM,
                form);
        };

        return dataFactory;
    });
