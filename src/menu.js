/*!
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
