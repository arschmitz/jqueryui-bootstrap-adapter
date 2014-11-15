/*!
 * jQuery UI Accordion Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of accordion classes to Bootstrap
	$.extend( $.ui.accordion.prototype.options.classes, {
		"ui-accordion": "panel panel-default",
		"ui-accordion-content": "panel-collapse collapse",
		"ui-accordion-content-active": "in",
		"ui-accordion-header": "panel-heading"
	});

})(jQuery);
;/*!
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
;/*!
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
;/*!
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
;/*!
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
;/*!
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
;/*!
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
