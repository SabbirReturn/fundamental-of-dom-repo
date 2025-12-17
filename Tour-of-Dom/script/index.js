let liCollections = document.getElementsByTagName('li');
// console.log(liCollections);

for(let liCollection of liCollections){
    let text = liCollection.innerText;
    console.log(text)
}

let places_title = document.getElementById('places-title');
places_title.innerText = 'Importent Places';

let places_name = document.getElementsByClassName('place-name');
for(let place_name of places_name){
    place_name.innerText = ' Kushtia'
}

let fruitsLiCollections = document.querySelectorAll(' #Fruits-conteiner li');
for(let fruitsLiCollection of fruitsLiCollections){
    console.log(fruitsLiCollection.innerText);
}

let fruitsLi = document.querySelector('#Fruits-conteiner li');
console.log(fruitsLi.innerText);


