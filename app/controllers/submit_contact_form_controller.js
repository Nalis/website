angular.module('website').
    controller('SubmitContactFormController', function($scope, submit_contact_form_factory) {
        $scope.contactForm = {};
        $scope.submitForm = submitForm;

        function submitForm(odt_file) {
          $scope.loading = true;

            submit_contact_form_factory.processContactForm($scope.contactForm)
              .success(function (result) {
                $scope.converted = result;
                $scope.loading = false;
              })
              .error(function (error) {
                $scope.loading = false;
                $scope.error_message = 'Some error occured';
//                 $scope.status = 'Unable to load customer data: ' + error.message;
              });
      }
});
