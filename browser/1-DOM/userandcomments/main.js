
let tabs = document.querySelector('.nav-tabs');
let userSubmitObj = document.getElementById('user-submit');
let commentSubmitObj = document.getElementById('comment-submit');
let usersArray = [];
let commentsArray = [];

/*
* tabs onClick Event Listener
*/
tabs.addEventListener('click', function (event) {
    console.log('nav-tabs on click...');

    //store active tab id and use when we will refresh the page
    localStorage.setItem('activeATagId', event.target.id);

    if (event.target.id == "users") {
        displayUsers();
    }
    else if (event.target.id == "comments") {
        displayComments();
    }

});

/*
* Display data when user will reload the browse or refresh the browser page
*/
onRefreshDisplayData = () => {

    console.log('onRefreshDisplayData...');

    let activeATagId = localStorage.getItem('activeATagId');

    //remove class 'active' from all a tag
    let allATags = document.getElementsByTagName("a");
    for (i = 0; i < allATags.length; i++) {
        allATags[i].classList.remove('active');
    }
    //assign class 'active' to current clicked tab
    let currentTab = document.querySelector(`.nav-tabs a[href="#tab-${activeATagId}"]`);

    if (currentTab != null)
        currentTab.classList.add('active');

    //first get all tabs and remove 'active' class
    let allTabPanes = document.getElementsByClassName("tab-pane");
    for (i = 0; i < allTabPanes.length; i++) {
        allTabPanes[i].classList.remove('active');
    }
    //assign class 'active' to current clicked tab pane
    let currentTabPane = document.getElementById(`tab-${activeATagId}`);

    if (currentTabPane != null)
        currentTabPane.classList.add('active');

    if (activeATagId == "users")
        displayUsers();
    else
        displayComments();
};

window.onload = onRefreshDisplayData;


/*
* Show list of the users
*/
displayUsers = () => {

    console.log('displayUsers...');

    let userTbody = document.getElementById('user-tbody');
    usersArray = JSON.parse(localStorage.getItem("users"));

    //it prevent adding multiple same data when user will click more than one time.
    userTbody.innerHTML = "";

    if (usersArray != null) {
        usersArray.forEach(user => {
            userTbody.insertAdjacentHTML("beforeend", ` <tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`);
        });
    }

};


/*
* Show list of the comments
*/
displayComments = () => {

    console.log('displayComments...');

    let commentTbody = document.getElementById('comment-tbody');
    commentsArray = JSON.parse(localStorage.getItem("comments"));

    //it prevent adding multiple same data when user will click more than one time.
    commentTbody.innerHTML = "";

    if (commentsArray != null) {
        commentsArray.forEach(comment => {
            commentTbody.insertAdjacentHTML("beforeend", ` <tr><td>${comment.id}</td><td>${comment.name}</td><td>${comment.email}</td><td>${comment.comment}</td></tr>`);
        });
    }

};

/*
* add user submit button onClick
*/
userSubmitObj.onclick = () => {
    console.log('user submit...');

    let form = document.getElementById('user-form'); // document.forms.userForm;
    let userTbody = document.getElementById('user-tbody');

    if (usersArray == null)
        usersArray = [];

    //first store new user object in the array 
    usersArray.push({
        id: userTbody.rows.length + 1,
        name: form.elements.userName.value,
        email: form.elements.userEmail.value
    });

    //store the new user to localStorage
    localStorage.setItem("users", JSON.stringify(usersArray));

    //after submmiting form, clear the elements/control value
    form.reset()

    //it prevent onclick conflict event with other
    //e.preventDefault(); or return false
    return false;
};

/*
* add comment submit button onClick
*/
commentSubmitObj.onclick = (e) => {
    console.log('comment submit...');

    let form = document.getElementById('comment-form'); // document.forms.userForm;
    let commentTbody = document.getElementById('comment-tbody');

    if (commentsArray == null)
        commentsArray = [];

    //first store new user object in the array 
    commentsArray.push({
        id: commentTbody.rows.length + 1,
        name: form.elements.commentUserName.value,
        email: form.elements.commentUserEmail.value,
        comment: form.elements.comment.value
    });

    //store the new user to localStorage
    localStorage.setItem("comments", JSON.stringify(commentsArray));

    //after submmiting form, clear the elements/control value
    form.reset();

    //it prevent onclick conflict event with other
    //e.preventDefault(); or return false
    return false;
};