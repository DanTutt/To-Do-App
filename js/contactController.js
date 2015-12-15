(function(){
    'use strict';

    angular.module('contactController', [])
        .controller('contactController', contactController);

    contactController.$inject = [];

    function contactController() {

        // list everything
        var cc = this;
        cc.sometext = 'default value';
        cc.doSomething = doSomething;

        // define functions
        function doSomething() {
            cc.sometext = '';
        }
    }

}());
