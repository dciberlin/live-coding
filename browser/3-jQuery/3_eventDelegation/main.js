$(document).ready(function () {
    console.log('document is ready...');

    /*
    
    $('button.btns').on('click',function(event){
     console.log('button click...');
     console.log('Hallo from button '+$(this).text());
    }); 
    */

    $('div').on('click', 'button.btns', function (event) {
        console.log('button click...');
        console.log('Hallo from button ' + $(this).text());
    });

    let index = 4;
    $('#addButton').on('click', function (e) {

        var buttonText = 'Button ' + index;

        $('div').append('<button class="btns">' + buttonText + '</button> ');

        index++;

    });

    let userID=2;
    $('#addUserButton').on('click', function (e) {

        let html=` <tr id="user-${userID}">
                    <td>${userID}</td>
                    <td>User -${userID} </td>
                    <td><button class="removeButton">remove me</button></td>
                </tr>`;

        $('#users').append(html);

        userID++;

    });

    $('table#users').on('click', 'button.removeButton', function(e) {
    //$('.removeButton').on('click', function (e) {
        // $(this).closest("tr").remove();
        $(this).parent().parent().remove();
     });

});
