(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = ["listService"];

    function basicController(listService) {

        // list everything
        var bc = this;
        bc.list = listService.items;
        bc.addedList = [];
        bc.addTo = '';
        bc.anotherList = '';
        bc.newItem = '';
        bc.currentList = listService.currentList;
        bc.sometext = 'default value';
        bc.addTasks = addTasks;
        bc.deleteItem = deleteItem;
        bc.hide = hide;
        bc.newList = newList;
        bc.listNames = listService.listName;
        bc.addList = addList;
        bc.changeList = changeList;



            // define functions
        function deleteItem(){
            var oldList = bc.list;
            bc.list = [];
            angular.forEach(oldList, function (myList) {
                if (!myList.done)
                    bc.list.push(myList);
            });
            listService.items = bc.list;

        }

        function addTasks() {
            if(bc.newItem !== "") {
                listService.addItem(bc.newItem);
                bc.newItem = '';

            }

            else{
                $("#invalidItem").addClass("showText");
            }
        }


        function hide(){
            $("p").removeClass("showText");

        }
        function newList() {
            if(bc.anotherList !== "") {
                listService.addList(bc.anotherList);
                bc.anotherList = '';


            }
            //    bc.addedList.push({name: bc.anotherList, done: false});
            //}
            //
            else {
                $("#invalidList").addClass("showText");
        }
        }

        function addList() {
            listService.addList(bc.listNames);
        }
        function changeList(index) {
            bc.currentList = index;
            listService.changeList(index);
        }
    }

}());


