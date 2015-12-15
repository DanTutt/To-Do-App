(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = [];

    function basicController() {

        // list everything
        var bc = this;
        bc.list=[];
        bc.newItem = '';
        bc.sometext = 'default value';
        bc.doSomething = doSomething;
        bc.deleteItem = deleteItem;


        // define functions
        function doSomething() {
            bc.list.push({item: bc.newItem, done: false});
            bc.newItem = '';

        }
        function deleteItem(){
            var oldList = bc.list;
            bc.list = [];
            angular.forEach(oldList, function (myList) {
                if (!myList.done) bc.list.push(myList);
            });
        }
    }

}());

