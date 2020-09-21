// init github
const github = new GitHub;

// init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) =>{
    // get input text
    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        // getUser is an async function of the GitHub class
        github.getUser(userText)
        .then(data => {
           if(data.profile.message === 'Not Found'){
            // show alert
            ui.showAlert('User not found', 'alert alert-danger')
           } else {
            // show the profile
            // will be added with innerHTML template literal
            ui.showProfile(data.profile);
           }
        });
    } else {
        // clear profile
        ui.clearProfile();
    }
});