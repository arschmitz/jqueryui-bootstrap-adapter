/*!
 * jQuery UI Tabs Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of tabs classes to Bootstrap
	$.ui.tabs.prototype.options.classes[ "ui-tabs-nav" ] = "nav nav-tabs";
	$.ui.tabs.prototype.options.classes[ "ui-tabs-panel" ] = "tab-pane";
	$.ui.tabs.prototype.options.classes[ "ui-tabs-active" ] = "active";

})(jQuery);
