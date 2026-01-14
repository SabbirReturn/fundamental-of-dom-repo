function changeText(){
    let text = document.getElementById('defaultText')
    text.innerText = "handle by function attached on onclick attribute"
}

document.getElementById('inputBtn').addEventListener('click', function(){
    let inputField = document.getElementById('inputField');
    let inputText = inputField.value;

    let display = document.getElementById('inputDisplay');
    display.innerText = inputText;
    inputField.value = '';
})


document.getElementById('pushBtn').addEventListener('click', function(){
    let name = document.getElementById('firstName');
    let nameText = name.value;
    let set = document.getElementById('setName');
    set.innerText = nameText;
    name.value = '';
})