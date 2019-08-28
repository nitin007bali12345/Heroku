var active_list = 1;
var list_length = 0;
$(() => {

    list_length = $(".list-item").length;
});


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
     switch(event.key)
     {
         case "ArrowUp":
                if (active_list > 1) {

                    $(".list-item").removeClass("active");
                    active_list--;
                    $(".list-item:nth-child(" + active_list + ")").addClass("active");
                    $(".list-item:nth-child(" + active_list + ")").focus()
    
                }
             break;

             case "ArrowDown":
                    if (active_list < list_length) {

                        $(".list-item").removeClass("active");
                        active_list++;
                        $(".list-item:nth-child(" + active_list + ")").addClass("active");
                        $(".list-item:nth-child(" + active_list + ")").focus()
        
                    }
             break;

             case "Enter":
                  location.href = "appointment.html"; 
             break;
     }
  }, false);
