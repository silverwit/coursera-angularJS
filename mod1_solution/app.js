(function () {
  'use strict';

  angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.lunchItems = "";
    $scope.message = "";

    $scope.tooMuchCheck = function () {

      if ($scope.lunchItems != "") {
        var myLunch = $scope.lunchItems.split(",");
        var myLunchCount = myLunch.length;

        if (myLunchCount <= 3) {
          $scope.message = "Enjoy!"
        } else $scope.message = "Too much!"


      } else $scope.message = "Please enter data first"



    };

  };


})();
