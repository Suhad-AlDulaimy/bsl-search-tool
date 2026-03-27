let data = [];

// Load JSON
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
    });

// Search on ENTER
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchVideo(this.value);
    }
});

function searchVideo(query) {
    query = query.toLowerCase().trim();

    const video = document.getElementById('videoPlayer');
    const message = document.getElementById('message');

    if (!query) {
        message.textContent = "Please type something";
        video.style.display = 'none';
        return;
    }

    const result = data.find(item =>
        item.phrase.toLowerCase().includes(query)
    );
console.log(data);
    if (result) {
        video.src = result.video;
        video.style.display = 'block';
        video.play();
        message.textContent = "";
    } else {
        video.style.display = 'none';
        message.textContent = "No sign found 😕";
    }
}