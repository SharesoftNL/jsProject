/* 
 *  Project: jsProject
 * 
 *  File: /functions/scrollElementFunction.js
 * 
 *  Purpose: 
 *      this module adds scroll element function to the
 *      object jsProject
 *  
 *  Last Revision:  10-03-2017
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

    // MODULE: scrollElementFunction( void ) void
    
    jsProject.scrollElementFunction = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'scrollElementFunction';              // string: module
        self.debugOn = false;                               // boolean: debugOn
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
            
            // add scrollElement function
            jsProject.scrollElement = self.scrollElement;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.scrollElement = function( elementId, parentId ) {
        // FUNCTION: scrollElement( html element id: elementId, html element id: parentId ) void
        
            var elementTop = $( '#' + elementId ).offset().top;
            var parentTop = $( '#' + parentId ).offset().top;
            var screenHeight = $( '#' + parentId ).height();
            self.debug( 'elementTop: ' + elementTop );
            self.debug( 'parentTop: ' + parentTop );
            self.debug( 'screenHeight: ' + screenHeight );
            
            if( elementTop > screenHeight ){
                // debug info
                self.debug( 'item not visible' );

                // get element
                var element = document.getElementById( elementId );
                // make shure object is visible
                element.scrollIntoView( false );

                // done 
                return;
            }
            if( elementTop < parentTop ){ 
                // debug info
                self.debug( 'item not visible' );
                
                // get element
                var element = document.getElementById( elementId );
                // make shure object is visible
                element.scrollIntoView( true );

                // done 
                return;
            }
            // debug info
            self.debug( 'item visible' );
            
        // DONE FUNCTION: scrollElement( html element id: elementId, html element id: parentId ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                // call global debug
                jsProject.debug( self.MODULE + ' ' + message );
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
    // DONE MODULE: scrollElementFunction( void ) void
})( jsProject );
// done create module function
