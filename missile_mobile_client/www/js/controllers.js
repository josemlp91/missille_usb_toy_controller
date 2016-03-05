angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, MissilService) {


config_data={
  host_ip:'',
  status:'disconnect'

}

angular.extend($scope, {config_data});

$scope.connect = function (){
    MissilService.connect($scope.config_data.host_ip).then(function(data){
      $scope.data = data;
      if (data.status="ok"){
        $scope.config_data.status="connect"
      }
    },
    function(errorMessage){
      $scope.error=errorMessage;
    });
};

$scope.print = function (){
    MissilService.print();
};


  $scope.up = function (){
      MissilService.up().then(function(data){
        $scope.data = data;
      },
      function(errorMessage){
        $scope.error=errorMessage;
      });
  };

  $scope.down= function (){
      MissilService.down().then(function(data){
        $scope.data = data;
      },
      function(errorMessage){
        $scope.error=errorMessage;
      });
  };

  $scope.left=function (){
      MissilService.left().then(function(data){
        $scope.data = data;
      },
      function(errorMessage){
        $scope.error=errorMessage;
      });
  };

  $scope.right=function (){
      MissilService.right().then(function(data){
        $scope.data = data;
      },
      function(errorMessage){
        $scope.error=errorMessage;
      });
  };

  $scope.fire=function (){
    console.log($scope.config_data);
      MissilService.fire().then(function(data){
        $scope.data = data;
      },
      function(errorMessage){
        $scope.error=errorMessage;
      });
  };

});
