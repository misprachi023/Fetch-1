document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'fb8cea78'; 
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const movieData = document.getElementById('movieData');

    searchButton.addEventListener('click', () => {
        const searchBar = searchInput.value.trim();

        if (searchBar) {
            movieData.innerHTML = '';

            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchBar}`)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True') {
                        const movieTitle = document.createElement('h2');
                        movieTitle.textContent = data.Title;

                        const moviePoster = document.createElement('img');
                        moviePoster.src = data.Poster || 'default-poster.jpg'; 

                        const movieDetails = document.createElement('div');
                        movieDetails.innerHTML = `
                            <h4>Year: ${data.Year}</h4>
                            <h4>Rated: ${data.Rated}</h4>
                            <h4>Genre: ${data.Genre}</h4>
                            <h4>Plot: ${data.Plot}</h4>
                            <h4>Actors: ${data.Actors}</h4>
                            <h4>Director: ${data.Director}</h4>
                        `;

                        movieData.appendChild(movieTitle);
                        movieData.appendChild(moviePoster);
                        movieData.appendChild(movieDetails);
                    } else {
                        movieData.textContent = 'Movie not found!';
                    }
                })
                .catch(error => {
                    console.log('Error:', error);
                    movieData.textContent = 'An error occurred while fetching data.';
                });
        } else {
            movieData.textContent = 'Please enter a movie title.';
        }
    });
});
