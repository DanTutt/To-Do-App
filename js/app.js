(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router",
        "navController",
        "basicController",
        "contactController",
        "listService"
    ])

    .config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            // define all app states (pages)
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    controller: "basicController as bc"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "templates/about.html"
                })
                .state("contact", {
                    url: "/contact",
                    templateUrl: "templates/contact.html",
                    controller: "contactController as bc"
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home");
        }]);

}());

