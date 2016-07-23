let ProfileService = function($firebaseArray) {//we want an array instead of an object (for working with angular)


	this.addProfile = addProfile;
	this.editProfile = editProfile;

	function addProfile(data) { // gets from input box
		console.log('add');

		let user = firebase.auth().currentUser; // we want to see OUR profile.


		let userRef = firebase.database().ref('users/' + user.uid + '/profile');
		let userArray = $firebaseArray(userRef);

		userArray.$add({ // #add is like .push, but for angular
			email: user.email, // include user email from firebase in our object
			id: user.uid, // include user id from firebase in our object
			first: data.first
		})
	}

	function editProfile(data) {
	}
};

ProfileService.$inject = ['$firebaseArray'];
export default ProfileService;