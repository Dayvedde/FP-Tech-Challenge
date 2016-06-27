'use strict';

/* Controller */
angular.module('myApp.controllers', []).
	controller('AppCtrl', function ($scope, $http) {
		$scope.styleCode = "";
		$scope.colorCode = "";
		$scope.sizeCode  = "";

		// Insert controller code here
    	$scope.test = function() {
			$http.get('/api/apparel', {
				params : {	styleCode : $scope.styleCode, 
							colorCode : $scope.colorCode, 
							sizeCode: $scope.sizeCode
						}
			})
			.success(function(response){
				console.log('Success');
				console.log(response);
			})
			.error(function(err){
	 			console.log(err);
			});
		}
	});

// $("#btn-submit").click(function(){
// 	var styleCode = $("#input-style-code").val();
// 	var colorCode = $("#input-color-code").val();
// 	var sizeCode = $("#input-size-code").val();

// 	getApparelPrice(styleCode, colorCode, sizeCode);
// 	console.log("Style, color, size", styleCode, colorCode, sizeCode);
// })