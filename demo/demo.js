$(function(){
  $( "#progressbar" ).progressbar({
    value: 67,
    classes: {
      "ui-progressbar": "progress",
      "ui-progressbar-value": "progress-bar"
    }
  });
  $( "#menu" ).menu();

  // Syntax highlighting for code samples
  SyntaxHighlighter.all();

  // Apply active style to menu items as we scroll
  $( ".scroll-link" ).waypoint(function(){
    $( "nav .active" ).removeClass( "active" );
    $( "[href$='" + this.id + "']" ).parent().addClass( "active" );
  });
  $( ".navbar-toggle" ).click(function(){
    $( "#navbar" ).toggleClass( "in" );
  });
});
