// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(88);

let change = document.getElementById('section-1')
change.classList.add('change')



let liCollection = document.getElementById('sectionli');

let li = document.createElement('li');
li.innerText = 'Dynamic';

liCollection.appendChild(li);
liCollection.appendChild(li);

