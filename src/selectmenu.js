/*!
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
