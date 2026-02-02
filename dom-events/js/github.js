

// document.getElementById('inputField').addEventListener('keyup', function(event){
//     let defaultValue = event.target.value;
//     // console.log(defaultValue)
//     let deleteBtn = document.getElementById('deleteBtn')
//     if(defaultValue === 'delete'){
//         deleteBtn.removeAttribute('disabled');
//     }
//     else{
//         deleteBtn.setAttribute('disabled',true);
//     }
// })

// document.getElementById('deleteBtn').addEventListener('click',function(){
//     let defaultText = document.getElementById('text');
//     defaultText.style.display = 'none';
// })

document.getElementById('textInput').addEventListener('keyup', function(event){
    let textInput = event.target.value;
    // console.log(textInput);
    let deleteBtn = document.getElementById('deleteBtn')
    if(textInput == 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled', true)
    }
})

// document.getElementById('deleteBtn').addEventListener('click', function(){
//     let text = document.getElementById('defaultText');
//     text.style.display= 'none';
// })
document.getElementById('deleteBtn').addEventListener('click', function(){
    let text = document.getElementById('defaultText');
    text.style.display= 'none';
})