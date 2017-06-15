(function() {
    
    var app = angular.module("AngularStringReversal", []);

    var ReversalController = function($scope) {
        $scope.model = "";
        $scope.revString = strRev;
        
        function strRev(){
            return $scope.model.split("").reverse().join("");
        };
        
    };

    app.controller("ReversalController", ReversalController);

}());