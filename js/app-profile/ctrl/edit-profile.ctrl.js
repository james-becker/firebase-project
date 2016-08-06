let EditProfileCtrl = function (ProfileService) {
	let vm = this;

	vm.editProfile = editProfile;
	vm.addProfile = addProfile;

	let currentUser;

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			currentUser = ProfileService.getProfile(user);
			vm.user = currentUser;
			console.log(vm.user);
			function checkLength () {
				if (vm.user <= 0) {
					setTimeout(function () {
						console.log('noUser');
						checkLength();
					}, 500)
				}
			}
		} else {
			vm.noUser = true; // later we're going to pass this to an Angular directive such as ng-show.
		}
	})
	function editProfile (user) {
		console.log('editing profile');//don't forget to put 'user'
		ProfileService.editProfile(user);//remember to call function
	}
	function addProfile (user) {
		console.log('adding profile');//don't forget to put 'user'
		ProfileService.addProfile(user);//don't forget to put 'user'
	}
};
EditProfileCtrl.$inject = ['ProfileService'];

export default EditProfileCtrl;