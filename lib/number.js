;(function() {
  
  'use strict';

  if(!Number.prototype.hasOwnProperty('numberFormat')) {
    Number.prototype.numberFormat = function() {
      var numberData = this.toString().split(".");
      return numberData[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") + (numberData[1] ? "." + numberData[1] : ""); 
    };
  }  

  if(!Number.prototype.hasOwnProperty('round')) {
    Number.prototype.round = function(dec) {
      return (!dec) ? Math.round(this) : Math.round(this*Math.pow(10,dec))/Math.pow(10,dec);
    };
  }

  if(!Number.prototype.hasOwnProperty('ceil')) {
    Number.prototype.ceil = function(dec) {
      return (!dec) ? Math.ceil(this) : Math.ceil(this*Math.pow(10,dec))/Math.pow(10,dec);
    };
  }

  if(!Number.prototype.hasOwnProperty('floor')) {
    Number.prototype.floor = function(dec) {
      return (!dec) ? Math.floor(this) : Math.floor(this*Math.pow(10,dec))/Math.pow(10,dec);
    };
  }

})();