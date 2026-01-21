document.getElementById('postBtn').addEventListener('click', function(){
    let textField = document.getElementById('text');
    let text = textField.value;
    
    let comment = document.getElementById('comment_container');

    let p = document.createElement('p');
    p.innerText = text;
    comment.appendChild(p);
    textField.value = '';
})