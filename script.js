var css = document.querySelector('h3');
var color1 = document.querySelectorAll('input')[0];
var color2 = document.querySelectorAll('input')[1];
var angle = document.querySelector('.angle-input');
var body = document.getElementById('gradient');

function setBackground() {
    body.style.background = "linear-gradient(" + angle.value +'deg, ' + color1.value + ", " + color2.value + ")"
    css.innerHTML = body.style.background + ';';
}

function setAngle() {
    if (angle.value >= 0 && angle.value <= 360) {
        if (angle.value === '') {
            body.style.background = "linear-gradient(0deg, " + color1.value + ", " + color2.value + ")"
            css.innerHTML = body.style.background + ';';
    } else {
        body.style.background = "linear-gradient(" + angle.value +'deg, ' + color1.value + ", " + color2.value + ")"
        css.innerHTML = body.style.background + ';';
    }}
}

color1.addEventListener('input', setBackground)

color2.addEventListener('input', setBackground)

angle.addEventListener('input', setAngle)
