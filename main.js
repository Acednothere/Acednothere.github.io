let timer = 3;

setInterval(function() 
{
    timer++;
    if (timer == 4)
    {
        timer = 1;
    }
    document.getElementById("dots").innerHTML = "".padStart(timer, ".");
}, 1000);