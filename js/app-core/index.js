import config from './config';
import LoginCtrl from './ctrl/login.ctrl';
import DashCtrl from './ctrl/dash.ctrl';
import LoginService from './services/login.service';

//index.js file always includes module and related controllers, configs and services

angular
	.module('app.core', ['ui.router'])//injecting router into module

	.config(config)//why not use quotation marks?

	.controller('LoginCtrl', LoginCtrl)

	.controller('DashCtrl', DashCtrl)

	.service('LoginService', LoginService)

	;