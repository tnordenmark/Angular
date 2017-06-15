(function() {
    
    var app = angular.module("AngularStringReversal", []);

    var ControllerName = function($scope) {
        $scope.model = "";
        $scope.revString = strRev;
        
        
    };

    app.controller("ControllerName", ControllerName);

}());