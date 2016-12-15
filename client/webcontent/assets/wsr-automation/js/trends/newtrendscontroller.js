var app = angular.module("trendsReport", ['googlechart']);
app.controller("trendsCtrl", function($scope,$http, $timeout) {
    $scope.printOption=function(){
        window.print();
    }
    $timeout(function(){
        $scope.chartObject=chartObject;
        $scope.chartObject1=chartObject1;
        $scope.chartObject3=chartObject3;
        $scope.tableDatas=tableDatas;

    });
   
  });

