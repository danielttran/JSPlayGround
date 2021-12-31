"use strict";

// Init Github
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');


// search input event
searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;

    if(userText !== ''){
        // Make Http call
        github.getUser(userText)
            .then(userData => {
                if(userData.login === undefined)
                {
                    // Show alert
                    ui.showAlert("User not found", "alert alert-danger");
                }
                else
                {
                    // Show profile
                    ui.showProfile(userData);

                }
            })
            .catch(error => console.log(error));
    }
    else
    {
        // Clear profile
        ui.clearProfile();
    }
});