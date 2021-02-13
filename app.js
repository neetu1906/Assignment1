(function(){

  'use strict';

    angular.module('LunchCheckApp',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope)
    {
      $scope.name="";
      $scope.message ="";

      $scope.checkIfTooMuch = function()
      {
        var spiltStrLen= $scope.name.split(",").length;
        if($scope.name === "" || $scope.name.length <=0)
        {
          $scope.message="Please Enter Data First..";
          $scope.myStyle = {color:'red'};
        }
        else if(spiltStrLen <= 3)
        {
          $scope.message="Enjoy..";
          $scope.myStyle = {color:'green'};
        }
        else {
          $scope.message="Too Much!";
          $scope.myStyle = {color:'green'};
        }
      };
    }

})();
