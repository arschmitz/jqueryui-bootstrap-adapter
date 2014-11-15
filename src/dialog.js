/*!
 * jQuery UI Dialog Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Converstion of dialog classes to Bootstrap
	$.extend( $.ui.dialog.prototype.options.classes, {
		"ui-dialog": "modal-content",
		"ui-dialog-titlebar": "modal-header",
		"ui-dialog-title": "modal-title",
		"ui-dialog-titlebar-close": "close",
		"ui-dialog-content": "modal-body",
		"ui-dialog-buttonpane": "modal-footer"
	});

})(jQuery);
