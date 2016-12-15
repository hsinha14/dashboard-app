var app = angular.module("trendsReport", ['googlechart']);
app.controller("trendsCtrl", function($scope,$http) {
    $scope.printOption=function(){
        window.print();
    }

    $http({ method: 'GET', url: '../mock-data/trendsData.json' }).success(function (data) {
            $scope.trendsData = data; // response data 
        }).
        error(function (data) {
            console.log("error");
    });
    $http({ method: 'GET', url: '../mock-data/trendsChart.json' }).success(function (data) {
            $scope.trendChart = data; // response data 
        }).
        error(function (data) {
            console.log("error");
    });
  });

