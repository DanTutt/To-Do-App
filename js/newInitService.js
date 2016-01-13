(function(){
    'use strict';

    angular.module('listService', ['ngStorage'])
        .service('listService', listService);

    listService.$inject = ['$localStorage'];

    function listService($localStorage)
    {
        var ls = this;
        ls.currentList = 0;
        ls.listCount = 1;
        ls.items = [];
        ls.listName = ['First List'];
        ls.addList = addList;
        ls.changeList = changeList;
        ls.addItem = addItem;

        function addList(listName) {
            //
            ls.listCount++;
            ls.currentList = ls.listCount-1;
            ls.listName.push (listName);
            $localStorage.listName = ls.listName;
        }
        function changeList(listNumber){
            ls.currentList = listNumber;
        }
        function addItem(itemName){
            ls.items.push({name: itemName, listNum: ls.currentList});
            $localStorage.items = ls.items;
        }
        (function
            (){
            if ($localStorage.listName){
                ls.listName = $localStorage.listName;
            }
        })();
        (function
            (){
            if ($localStorage.items){
                ls.items = $localStorage.items;
            }
        })();
    }

}());/**
 * Created by DanTutt on 12/17/15.
 */
