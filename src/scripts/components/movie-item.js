class MovieItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }
 getReleaseYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }
  render() {
    const title = this._movie.name || this._movie.original_name || this._movie.title || "Untitled Movie";
    const posterPath = this._movie.poster_path ? `https://image.tmdb.org/t/p/w500${this._movie.poster_path}` : '';
    const backdropPath = this._movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${this._movie.backdrop_path}` : '';
    
    // Check if release_date is available and not undefined
    const releaseYear = this._movie.release_date ? this.getReleaseYearFromDate(this._movie.release_date) : '';

    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {  
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-movie {
          width: 50%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .movie-info {
          margin-top:1rem;
          display: flex;
          background: #820000;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          border-radius: 5px;
          width: 50%;
          margin-left: auto;
          margin-right: auto;
        }
        .movie-info > h2 {
          font-weight: bold;
          text-align: center;
          font-size: 2rem;
          font-family:fantasy;
          color: #000000;
        }
        .movie-info > p {
          margin-top: 10px;
          overflow: hidden;
          max-width:50%;
          color: white;
          text-align: center;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        .fan-art-movie .movie-info{
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (max-width: 575.98px) {
            .movie-info {
            width:78%;
          }
        }
      </style>
      <div class="movie-info">
      <h2>${this._movie.title} - ${releaseYear}</h2>
        <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w500${this._movie.backdrop_path || this._movie.poster_path}" alt="Fan Art"></img>
        <p>${this._movie.overview}</p>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);