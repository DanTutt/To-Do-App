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

        function addList() {
            //
            ls.listCount++;
            ls.currentList = ls.listCount-1;
            ls.listNames.push(listName);
        }
    }

}());/**
 * Created by DanTutt on 12/17/15.
 */
