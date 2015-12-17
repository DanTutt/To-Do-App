(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = [];

    function basicController(listService) {

        // list everything
        var bc = this;
        bc.list = [];
        bc.addedList = [];
        bc.addTo = '';
        bc.anotherList = '';
        bc.newItem = '';
        bc.sometext = 'default value';
        bc.doSomething = doSomething;
        bc.deleteItem = deleteItem;
        bc.hide = hide;
        bc.newList = newList;
        //bc.listNames = listService.listName;
        //bc.addList = addList;


            // define functions
        function doSomething() {
            if(bc.newItem !== "") {
                bc.list.push({item: bc.newItem, done: false});
                bc.newItem = '';

            }
            else{
                $("p").addClass("showText");
            }
        }
        function deleteItem(){
            var oldList = bc.list;
            bc.list = [];
            angular.forEach(oldList, function (myList) {
                if (!myList.done) bc.list.push(myList);
            });
        }

        function hide(){
            $("p").removeClass("showText");

        }
        function newList() {
            bc.addedList.push({name: bc.anotherList, done: false});
            bc.anotherList = '';

        }
        //function addList() {
        //    listService.addList(bc.listName);
        //}
    }

}());

