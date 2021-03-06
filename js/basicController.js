(function(){
    'use strict';

    angular.module('basicController', [])
        .controller('basicController', basicController);

    basicController.$inject = ["$filter", "listService"];

    function basicController($filter, listService) {

        // list everything
        var bc = this;
        bc.list = listService.items;
        bc.addedList = [];
        bc.addTo = '';
        bc.anotherList = '';
        bc.newItem = '';
        bc.filteredItem = '';
        bc.filteredList = '';
        bc.currentList = listService.currentList;
        bc.sometext = 'default value';
        bc.addTasks = addTasks;
        bc.deleteItem = deleteItem;
        bc.hide = hide;
        bc.newList = newList;
        bc.listNames = listService.listName;
        bc.addList = addList;
        bc.removeAll = removeAll;
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
                bc.filteredItem = $filter("myCapsFilter")(bc.newItem);
                listService.addItem(bc.filteredItem);
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
                bc.filteredList = $filter("myCapsFilter")(bc.anotherList);
                listService.addList(bc.filteredList);
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
        function removeAll() {
            bc.list = [];
            bc.listNames = [];
            listService.removeAll(bc.list, bc.listNames);
            confirm('WARNING: This will remove ALL lists and tasks. Are you sure you want to Remove All?');
        }
    }

}());


