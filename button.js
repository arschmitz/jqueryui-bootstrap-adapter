/*!
 * jQuery UI Button Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of button classes to Bootstrap
	$.extend( $.ui.button.prototype.options.classes, {
		"ui-button": "btn btn-default",
		"ui-button-icon": "glyphicon"
	});

})(jQuery);
