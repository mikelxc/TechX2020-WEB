let colorInput1 = document.getElementById("color1");
let colorInput2 = document.getElementById("color2");
//let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', () =>{
    let color1 = colorInput1.nodeValue;
    let color2 = colorInput2.nodeValue;
    //hexInput.nodeValue = color;
    document.body.style.backgroundColor = color1;
})