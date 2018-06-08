import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import AppComponent from './app/app.component';

import NavigationComponent  from './app/components/navigation/navigation';
import HomeComponent        from './app/containers/home/home';

import { RootReducer } from './app/reducers';

angular
    .module('app', [
        uiRouter,
        ngRedux,

        NavigationComponent.name,
        HomeComponent.name
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                template: '<app></app>'
            })

            // Dashboard page to contain our goats list page
            .state('app.home', {
                url: '/home',
                template: '<home></home>'
            })
            .state('app.hello', {
              name: 'hello',
              url: '/hello',
              template: '<h3>hello angular-ui-router!!</h3>'
            })              
            .state('app.about', {
                name: 'about',
                url: '/about',
                template: '<h3>Its the UI-Router hello world app!</h3>'
          });

        $urlRouterProvider.otherwise('/home');


        $ngReduxProvider.createStoreWith(RootReducer);
    })
    .component('app', AppComponent);
