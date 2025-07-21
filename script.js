// script.js
const movies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: "⭐ 4.8",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: "⭐ 4.6",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  // Add more movies
];

const container = document.getElementById("movie-container");

movies.forEach((movie) => {
  container.innerHTML += `
    <div class="card">
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="card-content">
        <div class="card-title">${movie.title} (${movie.year})</div>
        <div>${movie.genre}</div>
        <div class="card-rating">${movie.rating}</div>
      </div>
    </div>
  `;
});
