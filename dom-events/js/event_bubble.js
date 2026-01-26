document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item-2 click');
    event.stopPropagation();
})
// document.getElementById('list_container').addEventListener('click', function(){
//     console.log('Li clicked')
// })

// document.getElementById('list_container').addEventListener('click', function(){
//     console.log('Li clicked')
// })
document.getElementById('list_container').addEventListener('click', function(){
    console.log('Li clicked')
})