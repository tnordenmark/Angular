(function() {
    
    var app = angular.module("AngularShowHide", []);

    var ShowHideController = function($scope) {
        $scope.showText = false;
        $scope.buttonTxt = "Show Text";
        
        $scope.ShowHide = function(){
            $scope.buttonTxt = !$scope.showText ? "Hide Text" : "Show Text";
            $scope.showText = $scope.showText ? false : true;
        };
    };

    app.controller("ShowHideController", ShowHideController);

}());