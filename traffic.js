var thirdc= document.getElementById('third_img');
var firstc= document.getElementById('first_img');
var secc= document.getElementById('sec_img');
var text= document.getElementsByClassName("message")[0];
var parent= document.getElementById('body');
var para =document.createElement("p");

var counter= 0;
function goready(num)
{
    firstc.setAttribute('src',"gray.png");
    secc.setAttribute('src',"gray.png");
    thirdc.setAttribute('src',"gray.png");

        switch(num)
        {

            case 1:
               firstc.setAttribute('src',"red.png");
               text.innerHTML="Ready";
               text.style.color="red";
    
            break;
    
            case 2:
                secc.setAttribute('src',"orange.png");
                text.innerHTML="Steady";
                text.style.color="orange";
    
            break;
    
            case 3:
                thirdc.setAttribute('src',"green.png");
                text.innerHTML="Go"
                text.style.color="green";
                break;
        }
    }

    function changeLights ()
    {
        counter+=1;
        if(counter>3)
            counter=1;
        goready(counter);
    }
setInterval(changeLights,2000);
