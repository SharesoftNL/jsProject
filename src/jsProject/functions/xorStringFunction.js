/* 
 *  Project: jsProject 
 * 
 *  File: /functions/xorStringFunction.js
 * 
 *  Last revision: 10-03-2017
 * 
 *  Purpose: 
 *          this module xor's 2 strings
 * 
 *  Author: Sharesoft
 *  Web: www.sharesoft.nl 
 *  Mail: info@sharesoft.nl 
 *  GitHub: SharesoftNL 
 * 
 *  Copyright (C) 2017 Sharesoft 
 *  GNU General Public License 3+ 
 *  see <http://www.gnu.org/licenses/>
 */

// create module function
( function( jsProject ){

    // FUNCTION: xorStringFunction( void ) void
    
    jsProject.xorStringFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'xorStringFunction';                  // string: module
        self.debugOn = false;                               // boolean: debug
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
        
            // debug info
            self.debug( 'construct' );
            
            // add extensions 
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function( ){
        // FUNCTION: addApplicationsExtensions( void ) void
        
            // add xorString function
            jsProject.xorString = self.xorString;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.xorString = function( string, key ) {
        // FUNCTION: xorString( string: string, key ) string
        
            var result = '';
            // loop over chars of key string
            for( var i = 0; i < key.length; i++ ){
                if( i < string.length ){
                    // encode string char and key char
                    result += self.xorChar( string[i], key[i] );
                }
                else {
                    // encode space and key char
                    result += self.xorChar( ' ', key[i] );
                }
            }
            // done loop over chars of key string
            return result;
            
        // DONE FUNCTION: xorString( string: string, key ) string
        };
        self.xorChar = function( char, key ){
        // FUNCTION: xorChar( char: char, char: key ) char
        
            // get the integer of the char
            var intChar = parseInt( char.charCodeAt( 0 ) );
            // get the integer of the key
            var intKey = parseInt( key.charCodeAt( 0 ) );
            // char XOR key
            var xor = intChar ^ intKey;
            // return char
            return String.fromCharCode( xor );
            
        // DONE FUNCTION: xorChar( char: char, char: key ) char
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                // call global debug
                jsProject.debug( self.FUNCTION + ' ' + message );
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
    };
    // DONE FUNCTION: xorStringFunction( void ) void 
})( jsProject );
// done create module function
