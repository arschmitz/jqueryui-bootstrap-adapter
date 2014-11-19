/*!
 * jQuery UI Tabs Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of tabs classes to Bootstrap
	$.extend( $.ui.tabs.prototype.options.classes, {
		"ui-tabs-nav": "nav nav-tabs",
		"ui-tabs-panel": "tab-pane",
		"ui-tabs-active": "active"
	});

})(jQuery);
