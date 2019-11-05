$(document).ready(function () {

    console.log('document is ready...');

    $('.insertAfter').click(function () {
        console.log('insertAfter...');

        //let val= $('input').val();
        let val = $('#userinput').val();
        console.log('value=>' + val);

        $('<li>' + val + '</li>').insertAfter('#contendersList li:last');
        $('#userinput').val('');

    });

    $('.after').click(function () {

        let val = $('#userinput').val();
        $('#contendersList li:last').after('<li>' + val + '</li>');
        $('#userinput').val(''); //after adding element value then clear the textbox

    });

    $('.insertBefore').click(function () {
        let val = $('#userinput').val();
        $('<li>' + val + '</li>').insertBefore('#contendersList li:first');
        $('#userinput').val('');
    });

    $('.before').click(function () {
        let val = $('#userinput').val();
        $('#contendersList li:first').before('<li>' + val + '</li>');
        $('#userinput').val('');
    });

    $('.appendTo').click(function () {
        //$('#contendersList li:first').appendTo('#contendersList');
        let val = $('#userinput').val();
        $('<li>' + val + '</li>').appendTo('#contendersList');
    });

    $('.append').click(function () {
        let val = $('#userinput').val();
        $('#contendersList').append('<li>' + val + '</li>');
    });

});