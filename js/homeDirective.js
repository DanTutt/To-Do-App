(function(){
    'use strict';

    angular.module('homeDirective', [])
        .directive('tdHeader', tdHeader)
        .directive('tdInvalidEntry', tdInvalidEntry)
        .directive('tdInvalidItem', tdInvalidItem)
        .directive('tdAddItem', tdAddItem)
        .controller('tdAddItemController', tdAddItemController);

    function tdHeader(){
        return{
            restrict: 'E',
            template: '<div class="col-md-12 text-center"><h3>To-Do List</h3></div>'
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

}());
