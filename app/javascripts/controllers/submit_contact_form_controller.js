angular.module('website').
    controller('SubmitContactFormController', ['$scope', 'submit_contact_form_factory', '$document',
      function($scope, submit_contact_form_factory, $document) {
      $scope.contactForm = {};
      $scope.submitForm = submitForm;
      $scope.status = {};
      var duration= 1000;
      var offset= 100;
      var someElement;


      function submitForm(odt_file) {
        $scope.loading = true;
        submit_contact_form_factory.processContactForm($scope.contactForm)
          .success(function (result) {
            var theFirst = null;
            $scope.status = {};
            if (result['errors']) {
              $scope.status.code = result['status'];
              $scope.status.message = 'Please inspect your form and submit it again';
              $scope.errors = result['errors'];
              angular.forEach(result['errors'], function(value, key) {
                if(!theFirst) {
                  theFirst = key;
                }
              });
              someElement = angular.element(document.getElementById(theFirst + '_label'));
              $document.scrollToElement(someElement, offset, duration);
            } else if (result['status'] == 'ok') {
              $scope.status.code = result['status'];
              $scope.successful = true;
              $scope.status.message = 'Thank you for your request. We will contact you soon';
            }
            $scope.converted = result;
            $scope.loading = false;
          })
          .error(function (error) {
            $scope.loading = false;
            $scope.error_message = 'Some error occured';
            someElement = angular.element(document.getElementById(theFirst + '_label'));
            $document.scrollToElement(someElement, offset, duration);

          });
      };

      $scope.gotoAnchor = gotoAnchor;

      function gotoAnchor(x) {
        var newHash = x;
        //if ($location.hash() !== newHash) {
        //  $location.hash(x);
        //} else {
          $anchorScroll();
//        }
      }
    }]);

