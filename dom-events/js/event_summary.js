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