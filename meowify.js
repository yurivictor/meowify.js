var Meow = function ( string ) {
  var $meowtext = [];
  var words = string.split( ' ' );
  words.forEach( function ( word ) {
    $meowtext.push( Meow.prototype.meowify( word ) );
  } );
  var meowifiedtext = $meowtext.join( ' ' );

  return meowifiedtext;
};

Meow.prototype = {
  grammarify: function ( meow, word ) {
    var last = word.slice( -1 );
    if ( last == '.' || last == '?' || last == '!' ) {
      meow = meow + last;
    }
    var first = word.charAt( 0 );
    if ( first === first.toLowerCase() && first !== first.toUpperCase() ) {
      return meow;
    } else {
      return meow.charAt( 0 ).toUpperCase() + meow.slice( 1 );
    }
  },
  meowify: function ( word ) {
    var length = word.length;

    if ( length == 0 ) {
      return element;
    } else if ( length > 0 && length <= 2 ) {
      return this.grammarify( 'mw', word );
    } else if ( length == 3 ) {
      return this.grammarify( 'mew', word );
    } else if ( length == 4 ) {
      return this.grammarify( 'meow', word );
    }

    var meowed = 'm' + Array( this.random() ).join( 'e' ) + Array( this.random() ).join( 'o' ) + 'w';
    return this.grammarify( meowed, word );
  },
  random: function () {
    return Math.floor( Math.random() * 10 ) + 1;
  }
};

var meowify = function ( string ) {
  return Meow( string );
};
