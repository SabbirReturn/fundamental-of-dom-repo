document.getElementById('text_input').addEventListener('keyup', function(event){
    let text = event.target.value;
    console.log(text)
})
let textField = document.getElementById('text_input')
textField.addEventListener('focus', function(){
    textField.style.border ='2px solid red';
    textField.style.outline = 'none'
    console.log('Focus')

})
document.getElementById('text_input').addEventListener('blur', function(){
    console.log('Focus')

})