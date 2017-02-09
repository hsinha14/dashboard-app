var app= angular.module("weeklyReports", []);
app.controller("reportsCtrl", function($scope,$http, $timeout) {
    $scope.printOption=function(){
        window.print();
    };
 	$timeout(function(){
    	$scope.tableDatas=tableDatas;
    	//$scope.accomp=accomp;

	});   
 });