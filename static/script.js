// Sample movies array (you should replace this with API data from TMDB)
const movies = [
    {
        title: "Movie 1",
        poster: "https://image.tmdb.org/t/p/w500/sample-poster1.jpg",
        videoUrl: "https://www.example.com/movie1.mp4"
    },
    {
        title: "Movie 2",
        poster: "https://image.tmdb.org/t/p/w500/sample-poster2.jpg",
        videoUrl: "https://www.example.com/movie2.mp4"
    }
];

// Inject movies into the grid
const movieGrid = document.getElementById('movie-grid');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    
    movieCard.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-buttons">
                <button class="play-btn" onclick="playMovie('${movie.videoUrl}')">Play</button>
                <a href="${movie.videoUrl}" download><button class="download-btn">Download</button></a>
            </div>
        </div>
    `;
    
    movieGrid.appendChild(movieCard);
});

// Play movie in modal
const modal = document.getElementById('movie-player-modal');
const moviePlayer = document.getElementById('movie-player');
const closeModal = document.getElementById('close-modal');

function playMovie(videoUrl) {
    modal.style.display = 'flex';
    moviePlayer.src = videoUrl;
    moviePlayer.play();
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    moviePlayer.pause();
});
