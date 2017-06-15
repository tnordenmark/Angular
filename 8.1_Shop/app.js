(function() {
    var Shop = {
        name: "Large horse",
        price: 3200,
        description: "Very large horse."
    };

    var app = angular.module("AngularShop", []);

    var StoreController = function($scope) {
        $scope.product = Shop;
    };

    app.controller("StoreController", StoreController);

}());