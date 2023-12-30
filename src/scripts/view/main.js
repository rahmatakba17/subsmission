import '../components/movie-list.js';
import '../components/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () =>{
    const searchElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');

    const onButtonSearhClicked = async () => {
        try{
            const results = await DataSource.searchMovie(searchElement.value);
            renderResult(results);
        }catch (message){
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        movieListElement.movie = results;
    };
    const fallbackResult = message => {  
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearhClicked;
};

export default main;