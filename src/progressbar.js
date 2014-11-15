/*!
 * jQuery UI Progressbar Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of progressbar classes to Bootstrap
	$.extend( $.ui.progressbar.prototype.options.classes, {
		"ui-progressbar": "progress",
		"ui-progressbar-value": "progress-bar"
	});

})(jQuery);
