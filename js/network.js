function sendRequest_COMIDITY_MASTER() 
{
   apiIdentify=0;
    $.ajaxSetup( {
      xhr: function() { return new window.XMLHttpRequest( { mozSystem: true } ); }
    } );
    $.ajax({
      type: 'GET',
      url: BASE_URL+COMIDITY_MASTER+JSON_CONVERTER,
      contentType: 'application/json;charset=utf-8'
           
    }).done( function( data, status, xhr )
    {
      renderResponse( xhr );
    } ).fail( function( xhr, status, err )
    {
      alert("Server is not reachable, Kindly try again.");
      window.close();
      renderResponse( xhr );
     
    } );
}

function renderResponseBody( xhr ) {
    console.log(xhr);
    var crossFrame  = xhr.getResponseHeader( 'X-Frame-Options' ) || "";
    var contentType = xhr.getResponseHeader( "content-type" ) || "";
    if( contentType.indexOf( 'html' ) > -1 && crossFrame != 'sameorigin' && crossFrame != 'deny' ) {
      $( '.result-body' ).html( '<iframe class="result-frame" src="' + getURL() + '"></iframe>' );
      $( '.result-frame' ).css( 'height', $( window ).height() - 150 + 'px' );
    } else if ( contentType.indexOf( 'json' ) > -1 ) {
      $( '.result-body' ).text( JSON.stringify( JSON.parse( xhr.responseText ), null, 2 ) );
    } else {
      $( '.result-body' ).text( xhr.responseText );
    }
     console.log($( '.result-body' ).text( xhr.responseText )); 
  }
  
  function renderResponseHeader( xhr ) {
      $( '.result-header' ).text( xhr.getAllResponseHeaders() );
  
  }
  
  function renderResponseStatus( xhr ) {
    var color, status = parseInt( xhr.status );
    if( 100 <= status && status < 200 ) {
      color = 'white';
    } else if( 200 <= status && status < 300 ) {
      color = '#5cb85c';
    } else if( 300 <= status && status < 400 ) {
      color = '#5bc0de';
    } else {
      color = '#d9534f';
    }
    $( '.result-state' ).css( 'background-color', color );
    $( '.result-state' ).text( 'Status: ' + status );
  }
  
  function renderResponse( xhr ) 
  {
    renderResponseBody( xhr );
    renderResponseHeader( xhr );
    renderResponseStatus( xhr );
    $( '.response-form' ).show();

      var strJSON = xhr.responseText;
      alert(strJSON);
      obj = JSON.parse(strJSON);
  }
  
  