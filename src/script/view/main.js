import "../component/app-bar.js";
import "../component/hero-section.js";
import "../component/search-feature.js";
import "../component/search-result.js";

import DataSource from '../data/data-source.js';

const main = () => {
    const searchIcon = document.querySelector('#search-icon');
    const searchInput = document.querySelector('#search-input');
    const searchResult = document.querySelector('search-result');

    const isClicked = async () => {
        if(searchInput.value === ""){
            alert("Please fill the search box first!");
        }
        else{
            try {
                const result = await DataSource.searchMusician(searchInput.value);
                renderResult(result);
            } catch (message) {
                fallbackResult(message);
            }
        }
    };

    const renderResult = results => {
        searchResult.artists = results;
    };

    const fallbackResult = message => {
        searchResult.renderError(message);
    };

    searchIcon.addEventListener("click", isClicked);
};

export default main;