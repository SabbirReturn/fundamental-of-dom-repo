function makeBlue(){
    document.body.style.backgroundColor = 'Blue'
}

let yellow = document.getElementById('makeYellow');
yellow.onclick = makeYellow;

function makeYellow (){
    document.body.style.backgroundColor = 'yellow'
}

let purple = document.getElementById('makePurple');
purple.onclick = function (){
    document.body.style.backgroundColor= 'purple'
}