'use strict';
var box = 0;

function showBox(){
    if (box>=4){
        document.getElementById("b1").style.color = "white";
        document.getElementById("para3").style.color = "mediumblue";
        document.getElementById("b1").style.backgroundColor = "#4CAF50";       
    }else if(box%2==0){
        document.getElementById("para1").style.color = "white";
        document.getElementById("para2").style.color = "mediumblue";
    }else if(box==3){
        document.getElementById("para1").style.color = "mediumblue";
        document.getElementById("para3").style.color = "white";
    }
    else{
        document.getElementById("para1").style.color = "mediumblue";
        document.getElementById("para2").style.color = "white";
    }
box++;
}