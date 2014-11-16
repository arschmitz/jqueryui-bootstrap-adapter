/*!
 * jQuery UI Menu Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of menu classes to Bootstrap
	$.extend( $.ui.menu.prototype.options.classes, {
		"ui-menu": "list-group",
		"ui-menu-icons": "",
		"ui-menu-icon": "glyphicon glyphicon-chevron-right",
		"ui-menu-item": "list-group-item",
		"ui-menu-divider": "",
		"ui-menu-item-wrapper": ""
	});

})(jQuery);
