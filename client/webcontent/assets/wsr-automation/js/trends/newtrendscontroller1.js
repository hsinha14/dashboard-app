var app = angular.module("trendsReport", ['googlechart']);
app.controller("trendsCtrl", function($scope,$http, $timeout) {
    $scope.printOption=function(){
        window.print();
    }
    $timeout(function(){
        $scope.chartObject=chartObject;
        $scope.chartObject1=chartObject1;
        $scope.chartObject2=chartObject2;
        $scope.chartObject3=chartObject3;
        $scope.chartObject4=chartObject4;
        $scope.chartObject5=chartObject5;
        $scope.tableDatas=tableDatas;

    });
   
  });
app.controller("reportsCtrl", function($scope,$http, $timeout) {
    $scope.printOption=function(){
        window.print();
    };
    $timeout(function(){
        $scope.tableDatas=tableDatas;
        //$scope.accomp=accomp;

    });   
 });

