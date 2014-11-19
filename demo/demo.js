$(function(){

  // Syntax highlighting for code samples
  SyntaxHighlighter.all();

  // Apply active style to menu items as we scroll
  $( ".scroll-link" ).waypoint(function(){
    $( "nav .active" ).removeClass( "active" );
    $( "[href$='" + this.id + "']" ).parent().addClass( "active" );
  });
  // toggle menu on narrow viewports
  $( ".navbar-toggle" ).click(function(){
    $( "#navbar" ).toggleClass( "in" );
  });
  // Insert a hr after every h2 for nice look
  $( "h2" ).after( "<hr>" );

  // Hover H1 copy
  var link = $( "<span class='glyphicon glyphicon-link'></span>").appendTo( "body" );
  $( "h1" ).on( "mouseover" , function(){
    var position = $( this ).position();

    position.position = "absolute";
    position.top = position.top + 33;
    position.left = position.left - 20;
    link.css(position).show();
  }).on( "mouseleave", function(){
    link.hide();
  }).click(function(){
    history.replaceState( {}, "Link", "#"+$( this ).prev( ".scroll-link" ).attr( "id" ) );
  });
});
