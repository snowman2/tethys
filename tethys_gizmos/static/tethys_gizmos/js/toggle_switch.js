/*****************************************************************************
 * FILE:    toggle_switch.js
 * DATE:    November 2016
 * AUTHOR:  Alan D. Snow
 * LICENSE: BSD 2-Clause
 *****************************************************************************/

/*****************************************************************************
 *                      LIBRARY WRAPPER
 *****************************************************************************/

var TETHYS_TOGGLE_SWITCH = (function() {
	// Wrap the library in a package function
	"use strict"; // And enable strict mode for this library

	/************************************************************************
 	*                      MODULE LEVEL / GLOBAL VARIABLES
 	*************************************************************************/
 	var public_interface;				// Object returned by the module

     /************************************************************************
 	*                    PRIVATE FUNCTION DECLARATIONS
 	*************************************************************************/
 	// private methods
 	var initToggleSwitch;

 	initToggleSwitch = function(tag) {
        $(tag).bootstrapSwitch();
 	};

	/************************************************************************
 	*                            TOP LEVEL CODE
 	*************************************************************************/
	/*
	 * Library object that contains public facing functions of the package.
	 */
	public_interface = {
        initToggleSwitch: initToggleSwitch,
     };

	// Initialization: jQuery function that gets called when
	// the DOM tree finishes loading
	$(function() {
		// Initialize any switch elements
		$('.bootstrap-switch').each(function() {
			initToggleSwitch(this);
		});
	});

	return public_interface;

}()); // End of package wrapper

/*****************************************************************************
 *                      Public Functions
 *****************************************************************************/
