(function() {
  var app = angular.module('gemStore', ['gemProduct']);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController',function(){
  	this.tab = 1;

  	this.selectTab = function(setTab) {
  		this.tab = setTab;
   	};
   	this.isSelected = function(checkTab){
   		return this.tab === checkTab;
   	}
  });


 // app.directive("PanelController", function() {
 //    return {
 //      restrict: "E",
 //      templateUrl: "product-tabs.html",
 //      controller: function() {
 //        this.tab = 1;

 //  	this.selectTab = function(setTab) {
 //  		this.tab = setTab;
 //   	};
 //   	this.isSelected = function(checkTab){
 //   		return this.tab === checkTab;
 //   	},
 //      controllerAs: "tab"
 //    };
 //  });





  app.controller("ReviewController", function(){
  	this.review = {};
  	
  	this.addReview = function(product){
  		//this.review = {createdOn: Date.now()};
  		product.reviews.push(this.review);
  		  	this.review = {};


  	};
  });


  



  var gems = [
    { 
    	name: 'Azurite',
     	price: 110.50,
     	images: [
       		"gem.png",
       		"gem2.png",
       		"gem3.png"
        ],	
       	description: "Azurite is a soft, deep blue copper mineral produced by weathering of copper ore deposits. It is also known as Chessylite after the type locality at Chessy-les-Mines near Lyon, France",
       	specification : "The optical properties (color, intensity) of minerals such as azurite and malachite are explained in the context of conventional electronic spectroscopy of coordination complexes. Relatively detailed descriptions are provided by ligand field theory.",
       	reviews: [
       	{
       		stars: 5,
       		body: "Azurite is used occasionally as beads and as jewelry, and also as an ornamental stone.",
       		author: "Oleh",
       		createdOn: 1397490980837
       	},
       	{
       		stars: 3,
       		body: "Azurite is used occasionally as beads and as jewelry, and also as an ornamental stone.",
       		author : "Ihor",
       		createdOn: 1397490980837
       	}
       	]
    },
    {
	    name: 'Bloodstone',
	    price: 22.90,
	    images: [
        ],
	    description: ". . ."
    },
    { 
    	name: 'Zircon',
    	price: 1100,
    	images: [
       		"gem.png",
       		"gem2.png",
       		"gem3.png"
        ], 
    	description: ". . ." 
    },
  ];
})();
