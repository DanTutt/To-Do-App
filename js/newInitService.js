(function(){
    'use strict';

    angular.module('listService', [])
        .service('listService', listService);

    listService.$inject = [];

    function listService()
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
        }
        function changeList(listNumber){
            ls.currentList = listNumber;
        }
        function addItem(itemName){
            ls.items.push({name: itemName, listNum: ls.currentList});
        }
    }

}());/**
 * Created by DanTutt on 12/17/15.
 */
