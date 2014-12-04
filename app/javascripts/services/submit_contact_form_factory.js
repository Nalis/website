angular.module('website').
  factory('submit_contact_form_factory', ['$http', function($http) {
        var CONFIG = {};
        CONFIG.SUBMIT_CONTACT_FORM = '/contact_handler.php';

        var dataFactory = {};

        dataFactory.processContactForm = function(form) {
            return $http.post(
                CONFIG.SUBMIT_CONTACT_FORM,
                {contact_form: form});
        };

        return dataFactory;
    }]);
