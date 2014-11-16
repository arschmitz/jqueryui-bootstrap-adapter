$(function(){
	// This is for generating code samples
	$( ".sample-container" ).each(function(){
		var html = $( this ).html().replace( /</g, "&lt;" ).replace( />/g, "&gt;" );

		$( this ).after( "<div class='sample-accordion'><h4 class='btn btn-info'>View Source</h4><div><pre class='brush: php; html-script: true'>" + html + "</pre></div></div>" );
	});
	$( ".sample-accordion" ).accordion({
		active: false,
		collapsible: true,
		classes: {
			"ui-accordion": "",
			"ui-accordion-header": ""
		}
	});
});