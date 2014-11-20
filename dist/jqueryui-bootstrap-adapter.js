/*!
 * jQuery UI Accordion Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of accordion classes to Bootstrap
	$.ui.accordion.prototype.options.classes[ "ui-accordion" ] = "panel panel-default";
	$.ui.accordion.prototype.options.classes[ "ui-accordion-content" ] = "panel-collapse collapse";
	$.ui.accordion.prototype.options.classes[ "ui-accordion-content-active" ] = "in";
	$.ui.accordion.prototype.options.classes[ "ui-accordion-header" ] = "panel-heading";

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
	$.ui.button.prototype.options.classes[ "ui-button" ] = "btn btn-default";
	$.ui.button.prototype.options.classes[ "ui-button-icon" ] = "glyphicon";

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
	$.ui.dialog.prototype.options.classes[ "ui-dialog" ] = "modal-content";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-titlebar" ] = "modal-header";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-title" ] = "modal-title";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-titlebar-close" ] = "close";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-content" ] = "modal-body";
	$.ui.dialog.prototype.options.classes[ "ui-dialog-buttonpane" ] = "modal-footer";

})(jQuery);
;/*!
 * jQuery UI Menu Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	// Conversion of menu classes to Bootstrap
	$.ui.menu.prototype.options.classes[ "ui-menu" ] = "list-group";
	$.ui.menu.prototype.options.classes[ "ui-menu-icons" ] = "";
	$.ui.menu.prototype.options.classes[ "ui-menu-icon" ] = "glyphicon glyphicon-chevron-right";
	$.ui.menu.prototype.options.classes[ "ui-menu-item" ] = "list-group-item";
	$.ui.menu.prototype.options.classes[ "ui-menu-divider" ] = "";
	$.ui.menu.prototype.options.classes[ "ui-menu-item-wrapper" ] = "";

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
	$.ui.progressbar.prototype.options.classes[ "ui-progressbar" ] = "progress";
	$.ui.progressbar.prototype.options.classes[ "ui-progressbar-value" ] = "progress-bar";

})(jQuery);
;/*!
 * jQuery UI Selectmenu Bootstrap Adapter
 *
 *
 * Copyright 2014 Alexander Schmitz
 * Released under the MIT license.
 */
(function( $, undefined ) {

	$.ui.selectmenu.prototype.options.classes[ "ui-selectmenu-button" ] = "btn btn-default dropdown-toggle";
	$.ui.selectmenu.prototype.options.classes[ "ui-selectmenu-open" ] = "open" ;
	$.ui.selectmenu.prototype.options.icons.button = "caret";
	$.ui.selectmenu.prototype.options.width = "auto";

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
	$.ui.tabs.prototype.options.classes[ "ui-tabs-nav" ] = "nav nav-tabs";
	$.ui.tabs.prototype.options.classes[ "ui-tabs-panel" ] = "tab-pane";
	$.ui.tabs.prototype.options.classes[ "ui-tabs-active" ] = "active";

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
	$.ui.tooltip.prototype.options.classes[ "ui-tooltip" ] = "tooltip top fade in";
	$.ui.tooltip.prototype.options.classes[ "ui-tooltip-content" ] = "tooltip-inner";

})(jQuery);
