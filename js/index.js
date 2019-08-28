$(document).ready(function ()  
{  
  sendRequest_COMIDITY_MASTER();
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
      if(keyName == 'SoftLeft')
      {
       
      }
      if(keyName == 'Enter')
      {
        location.href = "menu.html"; 
      }
  }, false);