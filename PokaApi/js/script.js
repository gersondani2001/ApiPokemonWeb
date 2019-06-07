
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDTRDG5_Ixbc7vkfvvlLfaBbb_QRNzmQQ8",
authDomain: "pokeapi-87cd0.firebaseapp.com",
databaseURL: "https://pokeapi-87cd0.firebaseio.com",
projectId: "pokeapi-87cd0",
storageBucket: "pokeapi-87cd0.appspot.com",
messagingSenderId: "638381007612",
appId: "1:638381007612:web:e2ca767ef0625eb6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firebase = firebase.storage();


angular.module('starter.controllers', [])
.controller("loginRes",function($scope,$state,$timeout){

	  firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});

	  $scope.usuario={}

	 $scope.func = function(x){

	    $scope.usuario = x

	    console.log($scope.usuario.name)
	    console.log($scope.usuario.pass)

	    firebase.auth().signInWithEmailAndPassword($scope.usuario.email, $scope.usuario.pass).then(function(y){
	      console.log($scope.usuario.email);
	      console.log(cope.usuario.pass);
	      $timeout(function(){
	        go("templates/PokeApi.html")
	      },1000)
	     
	    }).catch(function(error) {
	      // Handle Errors here.
	      var errorCode = error.code;
	      var errorMessage = error.message;
	      console.log(error.code)
	      console.log(error.message)
	    });

	 } 

})



.controller("regist",function($scope,$state,$timeout){


  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});


  $scope.reg = {}

  $scope.func2 = function(y){
    $scope.reg = y 

    console.log($scope.reg)
    firebase.auth().createUserWithEmailAndPassword($scope.reg.email, $scope.reg.password).then(function(m){
      console.log(m.user.uid)
      firebase.database().ref('users/' + m.user.uid).set({
      username: $scope.reg.user,
      email: $scope.reg.email,
      biografia: $scope.reg.bio,
      informacion: $scope.reg.info
  })
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      $timeout(function(){
        $state.go("login")
      })
      // ...
    });


  }
})








/*codigo de javaScript para componentes logicos en el codigo*/
console.log("Function(Correct)");

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("pre").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}




var pokeapilite = angular.module("pokeapilite",[])
pokeapilite.controller("appCtrl",function($scope,$rootScope,$http){
	console.log("Angular.js")
	console.log("JavaScript.js")

	$scope.Pokeapi = [];

	for (var x = 1; x <= 50; x++) {
		$http({
			method: "GET",
			url : "https://pokeapi.co/api/v2/pokemon/" + x 
		}).then(function(snapshot){

			$scope.Pokeapi.push(snapshot);

/*
			for(var i = 1; i <= x; i++){

				if (i>=1  && i<=9) {
					$scope.Pokeapi[i].data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + "00" + i + ".png"; 
				} else if (i>=10 && i < 100) {
					$scope.Pokeapi[i].data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + "0" + i + ".png";
				} else if (i>=100) {
					$scope.Pokeapi[i].data.sprites.front_default = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + i + ".png";
				}
			}

*/
			
		})	


		console.log($scope.Pokeapi);
	}




})



