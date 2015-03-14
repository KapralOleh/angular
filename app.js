(function() {
  var app = angular.module('gemStore', []);

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
       	reviews: "Azurite is used occasionally as beads and as jewelry, and also as an ornamental stone. However, its softness and tendency to lose its deep blue color as it weathers limit such uses. Heating destroys azurite easily, so all mounting of azurite specimens must be done at room temperature."
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
