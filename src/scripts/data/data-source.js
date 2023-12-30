class DataSource {
  static async searchMovie(keyword) {
    // const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmUwMjNkNDU3ZWI3ZmQ4NDJkMjBlZTFmYWQzMDJlYyIsInN1YiI6IjY1N2IyNWJjZWEzOTQ5MDEzODk4ODZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.We33mr22v85uxuSty-mAQJbg1dQ0Agj1G8wSKi9eOg4';
// https://api.themoviedb.org/3/search/collection?query=${keyword}
    return fetch(`https://api.themoviedb.org/3/search/collection?query=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
