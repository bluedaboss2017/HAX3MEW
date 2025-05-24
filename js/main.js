// I am aware that leaving API keys exposed is very bad practice, however the key was free and has been configured on Google's end to minimize risks
const key = 'AIzaSyCC-fo-cGI56xPLSUbWBb9MXmRc5itP9Nc';
const youtubeUser = 'UCXAcZDxhaZDJYdy27O0BuBA';
const textToUpdate = document.querySelector('.firstP');

getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${key}`).then(response => {
            return response.json()
    }).then(data => {
            textToUpdate.innerHTML = `I'm <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="troll">HAX3MEW</a>, and I run a gaming YouTube channel that is currently at ${data["items"][0].statistics.subscriberCount} subscribers. I occasionally upload videos, but I mainly stream with friends, currently on Fridays and Weekends.`
            document.querySelector('.stats').innerText = `Current Stats:\n\nViews: ${data["items"][0].statistics.viewCount} \nSubscribers: ${data["items"][0].statistics.subscriberCount} \nVideos: ${data["items"][0].statistics.videoCount}`
        });
};

window.onload = getSubscribers;
