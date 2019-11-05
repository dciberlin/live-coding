$(document).ready(function(){
console.log('document is ready...');

$('.addBtn').on('click',function(event){
    console.log('addBtn..');
    let val=$('#myInput').val();
    let html=`<li>${val}<span class="close">x</span></li>`;
    $('#myUL').append(html);
    $('#myInput').val('');
});

$('#myUL').on('click','.close',function(){
    console.log('remove...');
    $(this).parent().remove();
});

$('#myUL').on('click','li',function(){
    console.log('checked...');
    $(this).toggleClass('checked');
});

});