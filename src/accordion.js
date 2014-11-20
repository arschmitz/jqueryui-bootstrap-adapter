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
