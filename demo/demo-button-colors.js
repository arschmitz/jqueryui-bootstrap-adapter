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
});
