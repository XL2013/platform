(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .factory('Submitservice', Submitservice);

    Submitservice.$inject = ['$resource'];

    function Submitservice ($resource) {
        var service = $resource('api/Submitservice', {}, {
            'get': {method: 'GET', params:{}, isArray: false,
                 responseType: "text",
            }

        });

        return service;
    }
})();
