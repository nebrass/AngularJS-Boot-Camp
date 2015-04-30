'use strict';

angular.module('eventsApp', []).controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '30/04/2015',
            time: '20:49',
            location: {
                address: 'Gabriel Péri',
                city: 'Asnières-sur-seine',
                province: 'IDF'
            },
            img: 'http://yeoman.io/assets/img/yeoman-02.eed5.png',
            sessions: [
                {
                    name: 'AngularJS Get Started',
                    author: 'Scott Allen',
                    duration: '2h56m',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    name: 'AngularJS Fundamentals',
                    author: 'Eames, Cooper',
                    duration: '6h19',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    name: 'AngularJS Services in depth',
                    author: 'Brice Wilson',
                    duration: '3h3m',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                }
            ]
        }
    }
);