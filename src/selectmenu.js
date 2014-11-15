/*!
 * jQuery UI Selectmenu Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	$.extend( $.ui.selectmenu.prototype.options.classes, {
		"ui-selectmenu-button": "btn btn-default dropdown-toggle",
		"ui-selectmenu-open": "open"
	});

})(jQuery);
