let EditProfileCtrl = function (ProfileService) {
	let vm = this;

	vm.editProfile = editProfile;

	function editProfile (user) {
		ProfileService.editProfile;
	};

};
EditProfileCtrl.$inject = ['ProfileService'];

export default EditProfileCtrl;