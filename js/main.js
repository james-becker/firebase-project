import $ from 'jquery';
import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire'; //help angular know about firebase
import 'angular-ui-router';

import './app-core/index';
import './app-profile/index';


//import _ from 'underscore';
import moment from 'moment';

//init Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6joxq2Zw2J19WcR6qCAc4ZS1rQZDyM3c",
    authDomain: "applesauce-783ff.firebaseapp.com",
    databaseURL: "https://applesauce-783ff.firebaseio.com",
    storageBucket: "applesauce-783ff.appspot.com",
  };
  firebase.initializeApp(config);

angular
	.module('app', ['app.core','app.profile','firebase'])


console.log('Hello, World');
