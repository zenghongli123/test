'use strict';

function thousands_separators(num) {
 var Part = ''; 
    num = num.toString();
    if ( num.indexOf( '.' ) != -1 ) { 
        Part = '.'+ num.split( '.' )[1]; 
        num = parseInt(num.split( '.' )[0]);
    } 
    var array = num.toString().split( '' );
    var index = -3;
    while ( array.length + index > 0 ){ 
        array.splice( index, 0, ',' ); 
        // Decrement by 4 since we just added another unit to the array.
        index -= 4; 
    }
    var result=array.join( '' ) + Part;
    return result; 
}
//thousands_separators(num);
module.exports = thousands_separators;

