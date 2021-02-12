let colorOne = "red";
let colorTwo = "yellow";
function changeColor1(){
    let color1=document.getElementById("color1").value;
    document.getElementById("grad").style.backgroundImage="linear-gradient(to bottom right,"+ color1 + "," + colorTwo + ")";
    colorOne = color1;
};
function changeColor2(){
    let color2=document.getElementById("color2").value;
    document.getElementById("grad").style.backgroundImage="linear-gradient(to bottom right,"+ colorOne + "," + color2 + ")";
    colorTwo = color2;
};