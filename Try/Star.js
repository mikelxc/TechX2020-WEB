function a() {
    let circle = document.getElementsByClassName('circle');
    let orign = 500;
    while(true){
        let axis = orign + Math.round(Math.random()*6-6);
        circle[0].style.left = axis + "px";
        orign = axis;
        setTimeout(1);
    }
    console.log(2333);
}