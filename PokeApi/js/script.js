//codigo del js de javaScript y de angular js tambien
/*
$(document).ready(function(){
	console.log("jquery.js");
})
*/
/*
$(document).ready(function(){
	$('#').click(function(){
		$('#').toggle();
		console.log("jquery.js");
	})
})
*/

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


var app = angular.module("pokeapilite",[])
app.controller("appCtrl",function($scope,$rootScope,$http){
	console.log("Angular.js")
	console.log("JavaScript.js")

	$scope.Pokeapi = [];
	for (var x = 1; x <800; x++) {
		$http({
			method : "GET",
			url : "https://pokeapi.co/api/v2/pokemon/" + x
		}).then(function(snapshot){
			$scope.Pokeapi.push(snapshot);
		})		
		console.log($scope.Pokeapi);
	}
});