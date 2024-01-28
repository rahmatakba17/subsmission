import '../components/movie-list.js';
import '../components/search-bar.js';
import '../components/card-carousel.js';
import DataSource from '../data/data-source.js';

const main = () =>{
    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');
    const cardCarouselElement = document.querySelector('card-carousel');

    const onButtonSearchClicked = async () => {
        try{
            const results = await DataSource.searchMovie(searchElement.value);
            renderResult(results);
        }catch (message){
            
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };
    const fallbackResult = message => {  
        movieListElement.renderError('Please Check your connection ... and ALWAYS REMEMBER DICODING');
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;