function swapTheme() {
    var clsName=document.getElementById("app").className;
    var btnName=document.getElementById("swap").className;
    if(clsName==="day" && btnName==="button_day"){
        document.getElementById("app").className="night";
        document.getElementById("swap").className="button_night";
    }
    else{
        document.getElementById("app").className="day";
        document.getElementById("swap").className="button_day";
    }
}



<div id="app" class="day">
    <p>I am a Newton School student, ready to become an awesome full stack developer</p>
    <button onclick="swapTheme()" id="swap" class="button_day" >Toggle theme</button>
</div>



.day {
    background-color: white;
    color: black;
}

.night {
    background-color: black;
    color: gold;
}

.button_night {
    background-color: darkblue;
    color: white;
}

.button_day{
    background-color: white;
    color: black;
}

html, body {
    margin: 0px;
    height: 100%;
}

#app {
    height: 100%;
    padding: 10px;
}


