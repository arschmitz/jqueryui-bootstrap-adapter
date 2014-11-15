$(function(){
	 // Instantiate a button
  $( "#button" ).button();
  
  // Instantiate a button with various styles
  $( "#button-primary" ).button({
    classes: {
      "ui-button": "btn btn-primary"
    }
  });
  $( "#button-success" ).button({
    classes: {
      "ui-button": "btn btn-success"
    }
  });
  $( "#button-info" ).button({
    classes: {
      "ui-button": "btn btn-info"
    }
  });
  $( "#button-error" ).button({
    classes: {
      "ui-button": "btn btn-error"
    }
  });
  $( "#button-warning" ).button({
    classes: {
      "ui-button": "btn btn-warning"
    }
  });
  $( "#button-danger" ).button({
    classes: {
      "ui-button": "btn btn-danger"
    }
  });
  $( "#button-large" ).button({
    classes: {
      "ui-button": "btn btn-default btn-lg"
    }
  });
  $( "#button-small" ).button({
    classes: {
      "ui-button": "btn btn-default btn-sm"
    }
  });
  $( "#button-xsmall" ).button({
    classes: {
      "ui-button": "btn btn-default btn-xs"
    }
  });
  
  // Instantiate a button with an icon
  $( "#button-icon" ).button({
    "icon": "glyphicon-tree-conifer"
  });
  
  // Instantiate a selectmenu
  $( "#select" ).selectmenu({
    width: "auto",
    icons: {
      button: "caret select-icon"
    }
  });
  
  // Instantiate an icon only selectmenu for split button
  $( "#select-split" ).selectmenu({
    classes: {
      "ui-selectmenu-text": "sr-only"
    },
    icons: {
      button: "caret"
    },
    width: "auto"
  });
  
  // Instantiate a button for split button
  $( "#button-split" ).button();
  
  // Instantiate UI tabs we need to use the activate callback to toggle the 
  // active class since UI tabs have no active class on the panel
  $( "#tabs" ).tabs({
    activate: function( e, ui ) {
      ui.oldPanel.toggleClass( "active" );
      ui.newPanel.ToggleClass( "active" );
    }
  });
  
  // Accordions are a bit complicated because of substantial markup
  // diferences. We need to make each pane its own accordion and then 
  // link them using the beforeActivate callback
  $( ".panel" ).accordion({
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
  $( "#progressbar" ).progressbar({
    value: 67,
    classes: {
      "ui-progressbar": "progress",
      "ui-progressbar-value": "progress-bar"
    }
  });

});
