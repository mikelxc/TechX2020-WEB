function handleColorChange(){
    var nColor1=document.getElementById("color1").value;
    var nColor2=document.getElementById("color2").value;
    document.getElementById("container").style.background=`linear-gradient(75deg, ${nColor1},${nColor2})`;
}

function handleButtonClick(){
    document.getElementById("color1").value="#90ee90";
    document.getElementById("color2").value="#0000ff";
    document.getElementById("container").style.background=`linear-gradient(75deg, #90ee90,#0000ff)`;
}