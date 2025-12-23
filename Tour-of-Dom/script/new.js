let mainContainer = document.getElementById('main-container');
let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText = 'Select New Place';

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerText = 'Sundorban';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Bandorban';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'Khagrachori';
ul.appendChild(li3);


mainContainer.appendChild(section);
section.appendChild(h1);
section.appendChild(ul);

let liIteam = [li1,li2,li3];

for(let li of liIteam){
    li.style.color= 'black'
    li.style.margin = '10px'
    // li.style.border = '2px solid red'
}
section.style.border = '2px solid red'
