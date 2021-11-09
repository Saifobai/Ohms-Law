function check(){
    if(document.getElementById("four").checked)
        document.getElementById("sel5").disabled=true;
    if(document.getElementById("five").checked)
        document.getElementById("sel5").disabled=false;
}    

//http://jsfiddle.net/ozsxj2th/    
function change_color1(select) {
    document.getElementById("sel1").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color2(select) {
    document.getElementById("sel2").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color3(select) {
    document.getElementById("sel3").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color4(select) {
    document.getElementById("sel4").style.backgroundColor=select.options[select.selectedIndex].textContent;
}
function change_color5(select) {
    document.getElementById("sel5").style.backgroundColor=select.options[select.selectedIndex].textContent;
}


function calculate(){
    var num,tol;
    if(document.getElementById("four").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString());
    if(document.getElementById("five").checked)
        num=parseInt(document.getElementById("sel1").value.toString()+document.getElementById("sel2").value.toString()+document.getElementById("sel5").value.toString());
    var mul=Math.pow(10,parseInt(document.getElementById("sel3").value));
    if(document.getElementById("sel4").value=="10")
        tol=10;
    if(document.getElementById("sel4").value=="11")
        tol=5;
    //console.log(num*mul*(1+tol/100)); 
    document.getElementById("ans").innerHTML="Required resistance is <b>"+num*mul.toString()+" ohms = "+abbrNum(num*mul,2).toString()+" ohms</b>.<br>Considering tolerance values it may vary from "+Math.round(num*mul*(1-tol/100))+" - "+Math.round(num*mul*(1+tol/100))+" ohms.";   
}

//https://stackoverflow.com/questions/2692323/code-golf-friendly-number-abbreviator
function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "K", "M", "B", "T" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number*decPlaces/size)/decPlaces;

            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    return number;
}
function reset(){
    document.getElementById("four").checked=true;
    document.getElementById("five").checked=false;
    document.getElementById("sel1").value="--";
    document.getElementById("sel1").style.backgroundColor='white';
    document.getElementById("sel2").value="--";
    document.getElementById("sel2").style.backgroundColor='white';
    document.getElementById("sel3").value="--";
    document.getElementById("sel3").style.backgroundColor='white';
    document.getElementById("sel4").value="--";
    document.getElementById("sel4").style.backgroundColor='white';
    document.getElementById("sel5").value="--";
    document.getElementById("sel5").disabled="true";
    document.getElementById("sel5").style.backgroundColor='white';
    document.getElementById("ans").innerHTML="";    
}

function myTimer() {

    let date = new Date()  
    let time = date.toLocaleTimeString();  

    document.querySelector('.demo').textContent = time;
}

let timer = setInterval(myTimer, 1000);