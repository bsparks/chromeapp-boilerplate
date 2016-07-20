import 'angular-material/angular-material.css!';
import 'assets/app.css!';

import angular from 'angular';
import 'angular-material';

angular
    .element(document)
    .ready(function () {
        let appName = 'boilerplate-app';
        let body = document.getElementsByTagName('body')[0];
        let app = angular
            .module(appName, ['ngMaterial']);

        app.config(function ($mdIconProvider) {
            $mdIconProvider
                .defaultIconSet('assets/mdi.svg')
        });

        app.run($rootScope => {
            let appWin = chrome.app.window.current();
            $rootScope.closeApp = function() { appWin.close(); };
            $rootScope.minimizeApp = function() { appWin.minimize(); };
            $rootScope.maximizeApp = function() { appWin.maximize(); };
        });

        angular.bootstrap(body, [app.name], { strictDi: false });
    });