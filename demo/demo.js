$(function(){
  
  // Accordions are a bit complicated because of substantial markup
  // diferences. We need to make each pane its own accordion and then
  // link them using the beforeActivate callback
  $( ".panel-group" ).find( ".panel" ).accordion({
    collapsible: true,
    active: "false",
    beforeActivate: function( e , ui ){
      if( ui.newPanel.length > 0 ){
        $( this ).parent().children().not( this ).accordion( "option", "active", false );
      }
    }
  }).eq( 0 ).accordion( "option", "active", 0 );
  
  // Instantiate UI Tooltip
  $( document ).tooltip({
    show: false,
    position: {
      my: "center bottom",
      at: "center top",
      using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "tooltip-arrow" )
            .appendTo( this );
      }
    }
  });
  
  // Instantiate UI Dialog
  $( "#dialog" ).dialog({
    autoOpen: false,
    buttons: [
      {
        text: "foo",
        "class": "btn-primary",
        click: $.noop
      }
    ]
  });
  $( "#open-dialog" ).button().click(function(){
    $( "#dialog" ).dialog( "open" );
  });
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
    $( ".active" ).removeClass( "active" );
    $( "[href$='" + this.id + "']" ).parent().addClass( "active" );
  });
});
