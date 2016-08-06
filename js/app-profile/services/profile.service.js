let ProfileService = function($firebaseArray, $state) {//we want an array instead of an object (for working with angular), here we're injecting it into our service.

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;

	function getProfile(user) {
		let ref = firebase.database().ref('users/' + user.uid + '/profile'); //create reference to our database!
		let array = $firebaseArray(ref);
		return array;
	}

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
		console.log(data);
		let user = firebase.auth().currentUser; // just a method to get the user object from Firebase. Nothing to do with angular. We want to access uid so that when we edit the database we save to the correct path.
		
		let ref = firebase.database().ref('users/' + user.uid + '/profile');//.ref() will default to root unless you give it a path.
		
		let array = $firebaseArray(ref);//this is Angular.  REF  is  here
		let _$id = data.$id;
		console.log(_$id);

		setTimeout(function () {
			let item = array.$getRecord(data.$id)//$getRecord is Angular-Fire method.
			console.log(item);

			item.first = data.first;
			array.$save(item).then(function () {
				$state.go('root.profile');
			}); // $save() is an angualr fire thing.
		}, 500);
	}
};

ProfileService.$inject = ['$firebaseArray', '$state'];
export default ProfileService;