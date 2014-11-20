/*!
 * jQuery UI Dialog Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Converstion of dialog classes to Bootstrap
	$.ui.dialog.prototype.options.classes[ "ui-dialog" ] = "modal-content";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-titlebar" ] = "modal-header";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-title" ] = "modal-title";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-titlebar-close" ] = "close";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-content" ] = "modal-body";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-buttonpane" ] = "modal-footer";

})(jQuery);
