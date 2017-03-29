/* 
 *  Project: jsProject Examples
 * 
 *  File: main.js
 * 
 *  Purpose:  
 *      this is the main module of the application
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
( function() {

    // MODULE: sharesoft( void ) void
    
    // add the sharesoft object to the window
    window.sharesoft = new function(){};

    // PRIVATE:
    // MEMBERS:
    var self = window.sharesoft;                            // object: self
    self.MODULE = 'sharesoft';                              // string: module
    self.debugOn = false;                                   // boolean: debugOn
    self.debuggerOptions = {                                // json: debuggerOptions
        'zIndex'                : 8000,                     // integer: z index
        'top'                   : 110,                      // integer: top
        'left'                  : 740,                      // integer: left  
        'width'                 : 850,                      // integer: width
        'height'                : 270                       // integer: height
    };                                                      // done json: debuggerOptions
    self.modules = {                                        // json: modules
        'settingsModule'        : null,                     // module: settings
        'values'                : null,                     // module: values
        'layout'                : null,                     // module: layout
        'header'                : null,                     // module: header
        'content'               : null,                     // module: content
    };                                                      // done json: modules
    // DONE MEMBERS

    // FUNCTIONS
    self.start = function() {
    // FUNCTION: start( void ) void
        
        // create the jsProject module
        jsProject.construct();
        // add debug functions
        jsProject.debugOn( self.debugOn, self.debuggerOptions );

        // add settings module
        self.modules['settings'] = new sharesoft.settingsModule( );
        // add values module
        self.modules['values'] = new sharesoft.valuesModule( );

        // add content
        self.addContent();

        // update the layout
        jsProject.callEvent( 'sceneChange' );

        // all is well
        jsProject.debug( self.MODULE + ' ' + 'don\'t panic' );
        
    // DONE FUNCTION: start( void ) void
    };
    self.addContent = function(){
    // FUNCTION: addContent( void ) void
    
        // add layout module
        self.modules['layout'] = new sharesoft.layoutModule();
        // add header module
        self.modules['header'] = new sharesoft.headerModule();
        // add content module
        self.modules['content'] = new sharesoft.contentModule();

    // DONE FUNCTION: addContent( void ) void
    };
    self.showDebugger = function( debugOn ) {
    // FUNCTION: showDebugger( boolean: debugOn ) void
        
        // call jsProject debugOn
        jsProject.debugOn( debugOn, self.debuggerOptions );
        
    // DONE FUNCTION: showDebugger( boolean: debugOn ) void
    };
    // DONE PRIVATE

    // PUBLIC
    return {
        start : function(){
            // FUNCTION: start( void ) void 
            self.start();
        }
    };
    // DONE PUBLIC
    // DONE MODULE: sharesoft( void ) void
})();
// done create module function
 
