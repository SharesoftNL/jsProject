/* 
 *  Project: jsProject Examples 
 * 
 *  File: contentModule.js
 * 
 *  Purpose: 
 *      creates the content
 *  
 *  Last Revision:  22-03-2017
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
( function( sharesoft ){

    // MODULE: contentModule( void ) void
    
    sharesoft.contentModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'contentModule';                                  // string: module
        self.debugOn = true;                                            // boolean: debugOn
        self.contentContainerOptions = {                                // json: content container Options
            'id'                            :   self.MODULE + 'ContentContainer', // string: id
            'element'                       :   'div',                  // string: html element type 
            'text'                          :   '',                     // string: text
            'margin'                        :   '0 auto',               // css margin
            'marginTop'                     :   162,                    // css margin top
            'minimumWidth'                  :   '1020px',                         // css style width
            'maximumWidth'                  :   1200,                   // css maximum width
            'backgroundColor'               :   'transparent',          // css background color
            'zIndex'                        :   sharesoft.getSetting( 'zIndex' )['content'].toString() // integer: z index
        };                                                              // done json: content container 
        self.modules = {                                                // json: modules
            'intro' :   null,                                           // module: intro
            'items' :   null                                            // module: items
        };                                                              // done json: modules                                                                               
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );

            // add html
            self.addHtml();

            // add intro
            self.modules['intro'] = new sharesoft.contentIntroModule( self.contentContainerOptions['id'] );

            // add items
            self.modules['items'] = new sharesoft.contentItemsModule( self.contentContainerOptions['id'] );

        // DONE FUNCTION: construct( void ) void
        };
        self.addHtml = function() {
        // FUNCTION: addHtml( void ) void
            
            // add the menu to parent
            $( '#' + sharesoft.getSetting( 'ids' )['layoutId'] ).append( jsProject.jsonToElementHtml( self.contentContainerOptions ) );
        

        // DONE FUNCTION: addHtml( void ) void
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
    // DONE MODULE: contentModule( void ) void
})( sharesoft );
// done create module function
