let LoginCtrl = function (LoginService, $state) {
	let vm = this;//provide a different variable to access LoginCtrl from config

	vm.login = login;
	vm.register = register;
	vm.logout = logout;
	//assign login function to vm.login to make accessible to config

	//check for logged in user
	firebase.auth().onAuthStateChanged(
		function(user) {
			if (user) {
				console.log(user);
				$state.go('root.dash'); // maybe put into the service?
			} else {
				console.log('no user'); // if not logged in, take to login page --- jjb!
				$state.go('login');
			}
	});

	function login (data) {
		LoginService.login(data);
	};

	function register (data) {
		LoginService.register(data);
	}

	function logout () {
		LoginService.logout();
	}



};

LoginCtrl.$inject = ['LoginService', '$state'];

export default LoginCtrl;