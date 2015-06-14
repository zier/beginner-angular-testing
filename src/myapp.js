var app = angular.module("myapp", []);

app.controller("SimpleCtrl", function($scope){
    
    $scope.message = "Hello World";
    
    $scope.add = function(a,b) {
      return a + b
    }
    
});