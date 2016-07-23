let LoginService = function ($state) {//must inject state for logout
	this.register = register;
	this.login = login;
	this.logout = logout;

	function register (data) {
		firebase.auth().createUserWithEmailAndPassword(data.email, data.password).catch(function (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
	};

	function login (data) {
		firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function (error) {
			var errorCode = error.code;
			console.log(errorCode);
			console.log(error.message);
		}).then(function() {
			console.log('logged in');//let console know logged in
		});
	};

	function logout () {
		firebase.auth().signOut().then(
			function () {
				$state.go('login');
		}), function(error) {
			console.log(errorMessage);
		}
	}
}

LoginService.$inject = ['$state'];

export default LoginService;