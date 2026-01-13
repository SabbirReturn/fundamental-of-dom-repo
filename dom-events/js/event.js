function makeBlue(){
    document.body.style.backgroundColor = 'Blue'
}

let yellow = document.getElementById('makeYellow');
yellow.onclick = makeYellow;

function makeYellow (){
    document.body.style.backgroundColor = 'yellow'
}


// let purple = document.getElementById('makePurple');
// purple.onclick = function (){
//     document.body.style.backgroundColor= 'purple'
// }
// let purple = document.getElementById('makePurple');
// purple.onclick = function (){
//     document.body.style.backgroundColor= 'purple'
// }
let purple = document.getElementById('makePurple');
purple.onclick = function (){
    document.body.style.backgroundColor= 'purple'
}


function makeRed(){
    document.body.style.backgroundColor = 'red';
}

let white = document.getElementById('makeWhite');
white.onclick = function(){
    document.body.style.backgroundColor = 'White';
}

let greenBtn = document.getElementById('makeGreen');
greenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

document.getElementById('makeGoldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})

// let purple = document.getElementById('makePurple');
// purple.onclick = function (){
//     document.body.style.backgroundColor= 'purple'
// }
