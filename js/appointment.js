
$(() => {

    
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
     switch(event.key)
     {
             case "SoftLeft":
                    location.href = "menu.html"; 
             break;

             case "SoftRight":
                alert("coming soon")
             break;
     }
  }, false);
