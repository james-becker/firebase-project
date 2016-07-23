let EditProfileCtrl = function (ProfileService) {
	let vm = this;

	vm.editProfile = editProfile;
	vm.addProfile = addProfile;

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