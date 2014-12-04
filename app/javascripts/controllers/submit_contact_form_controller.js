angular.module('website').
    controller('SubmitContactFormController', ['$scope', 'submit_contact_form_factory', function($scope, submit_contact_form_factory) {
        $scope.contactForm = {};
        $scope.submitForm = submitForm;
        $scope.status = {};

        function submitForm(odt_file) {
          $scope.loading = true;

            submit_contact_form_factory.processContactForm($scope.contactForm)
              .success(function (result) {
                  $scope.status = {};
                  if(result['errors']) {
                    $scope.status.code = result['status'];
                    $scope.status.message = 'Please inspect your form and submit it again';
                    $scope.errors = result['errors'];
                  } else if(result['status'] == 'ok') {
                    $scope.status.code = result['status'];
                    $scope.successful = true;
                    $scope.status.message = 'You request was sent successfully';
                  }
                  $scope.converted = result;
                  $scope.loading = false;
              })
              .error(function (error) {
                $scope.loading = false;
                $scope.error_message = 'Some error occured';
//                 $scope.status = 'Unable to load customer data: ' + error.message;
              });
      }
}]);
