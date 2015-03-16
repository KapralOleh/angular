(function(){
	var app = angular.module('gemProduct', []);
	app.directive('producted', function(){
  	return {
  		//restrict: 'E', //тег 
  		restrict: 'A',// атрибут
  		// templateUrl: 'product.html' // url
  		template: '<span class = "gold">{{product.name}}</span> <em class="right"> {{product.price | currency}}</em>'
  	};
  });
})();