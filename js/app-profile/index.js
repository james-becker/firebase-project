//import angular from 'angular';
import ProfileCtrl from './ctrl/profile.ctrl';
import EditProfileCtrl from './ctrl/edit-profile.ctrl';
import ProfileService from './services/profile.service';

angular
	.module('app.profile', [])
	.controller('ProfileCtrl', ProfileCtrl)
	.controller('EditProfileCtrl', EditProfileCtrl)
	.service('ProfileService', ProfileService)
;