document.querySelector('button').addEventListener('click', function() {
    alert("You're already on the home page goofy, I haven't added more pages yet");
});

// I am aware that leaving API keys exposed is very bad practice, however the key has been configured on Google's end to minimize risks
const key = 'AIzaSyCC-fo-cGI56xPLSUbWBb9MXmRc5itP9Nc';
const youtubeUser = 'UCXAcZDxhaZDJYdy27O0BuBA';
const textToUpdate = document.querySelector('.firstP');

let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${key}`)
    .then(response => {
            return response.json()
    })
    .then(data => {
            textToUpdate.innerText = `I'm HAX3MEW, and I run a gaming YouTube channel that is currently at ${data["items"][0].statistics.subscriberCount} subscribers. I occasionally upload videos, but I mainly stream with friends, currently on Fridays and Weekends.`
    });
};


window.onload = getSubscribers;
