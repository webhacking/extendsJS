;(function() {
  
  'use strict';

  if(!String.prototype.hasOwnProperty('reverse')) {
    String.prototype.reverse = function() {
      return this.split("").reverse().join("");
    };
  }

  if(!String.prototype.hasOwnProperty('toNumber')) {
    String.prototype.toNumber = function() {
      return (isNaN(this)) ? this : Number(this);
    };
  }

  if(!String.prototype.hasOwnProperty('trim')) {
    String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g,"");
    };
  }

  if(!String.prototype.hasOwnProperty('ltrim')) {
    String.prototype.ltrim = function() {
      return this.replace(/^\s+/,"");
    };
  }

  if(!String.prototype.hasOwnProperty('rtrim')) {
    String.prototype.rtrim = function() {
      return this.replace(/\s+$/,"");
    };
  }

  if(!String.prototype.hasOwnProperty('rpad')) {
    String.prototype.rpad = function(paddingStr,strLength) {
      var self =  this;
      
      if(typeof(paddingStr)=='number') paddingStr = paddingStr.toString();
      
      if( this.length < strLength) {
        for ( var i = 0; i < (strLength - this.length) ; i++ ) {
          self = self.concat(paddingStr.charAt(0));
        }
      }
      return self;
    };
  }
  
  if(!String.prototype.hasOwnProperty('lpad')) {
    String.prototype.lpad = function(paddingStr,strLength) {
      var self = this;
      
      if(typeof(paddingStr)=='number') paddingStr = paddingStr.toString();
      
      if( this.length < strLength) {
        for ( var i = 0; i < (strLength - this.length) ; i++ ) {
          self = paddingStr.charAt(0).concat(self);
        }
      }
      return self;
    };
  }
  
  if(!String.prototype.hasOwnProperty('lcfirst')) {
    String.prototype.lcfirst = function() {
      var self = this,
          firstChar = self.charAt(0).toLowerCase();
      return firstChar.concat(self.slice(1));
    };
  } 

  if(!String.prototype.hasOwnProperty('ucfirst')) {
    String.prototype.ucfirst = function() {
      var self = this,
          firstChar = self.charAt(0).toUpperCase();
      return firstChar.concat(self.slice(1));
    };
  } 

  if(!String.prototype.hasOwnProperty('shuffle')) {
    String.prototype.shuffle = function() {
      return this.split("").sort(function() { return 0.5 - Math.random();}).join("");
    };
  }

  if(!String.prototype.hasOwnProperty('stripslashes')) {
    String.prototype.stripslashes = function() {
      return this.replace(/\\(.?)/g, function (slashes) {
        
        switch (slashes) {
        case '\\':
          return '\\';
        case '0':
          return '\u0000';
        case '':
          return '';
        default:
          return slashes;
        }
      });
    };
  }
  
  if(!String.prototype.hasOwnProperty('byte')) {
    String.prototype.byte = function() {
      var byteLength = 0,
          checkChar;
      
      for (var i = 0; i < this.length; i++) {
          checkChar = escape(this.charAt(i));
          if (checkChar.length === 1) byteLength++;
          else if(checkChar.indexOf("%u")!=-1 ) byteLength += 2;
          else if(checkChar.indexOf("%")!=-1 ) byteLength += checkChar.length/3;
      }

      return byteLength;
    };
  } 

  if(!String.prototype.hasOwnProperty('numberFormat')) {
    String.prototype.numberFormat = function() {
      var numberData = this.split(".");
      return numberData[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") + (numberData[1] ? "." + numberData[1] : ""); 
    };
  }  
})();