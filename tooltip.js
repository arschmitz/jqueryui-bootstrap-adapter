/*!
 * jQuery UI Tooltip Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of tooltip classes to Bootstrap
	$.extend( $.ui.tooltip.prototype.options.classes, {
		"ui-tooltip": "tooltip top fade in",
		"ui-tooltip-content": "tooltip-inner"
	});

})(jQuery);
