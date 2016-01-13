(function(){
    'use strict';

    angular.module('homeDirective', [])
        .directive('tdHeader', tdHeader)
        .directive('tdInvalidEntry', tdInvalidEntry)
        .directive('tdInvalidItem', tdInvalidItem)
        .directive('tdAddItem', tdAddItem)
        .directive('tdNoTasks', tdNoTasks)
        .controller('tdAddItemController', tdAddItemController);

    function tdHeader(){
        return{
            restrict: 'E',
            template: '<div class="col-md-12 text-center"><h1>To-Do List</h1></div>'
        };
    }
    function tdInvalidEntry(){
        return{
            restrict: 'E',
            template: '<p id="invalidList">Invalid Entry</p>'
        };
    }
    function tdInvalidItem(){
        return{
            restrict: 'E',
            template: '<p id="invalidItem">Invalid Entry</p>'
        };
    }
    function tdAddItem(){
        return{
            scope: {},
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/newItems.html',
            bindToController: {myList: "=", index: "="},
            controller: 'tdAddItemController as ai'
        };

    }
    function tdAddItemController(){
        var ai = this;
        ai.index;
    }
    function tdNoTasks(){
        return{
            restrict: 'E',
            template: '<div id="noTasks" ng-hide="bc.list.length">No Tasks to Display</div>'
        };
    }

}());
