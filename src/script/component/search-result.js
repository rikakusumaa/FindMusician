import './search-item.js';

class SearchResult extends HTMLElement {
    set artists(artists){
        this._artists = artists;
        this.render();
    }

    render(){
        this.innerHTML = "";
        this._artists.forEach(artist => {
            const artistItemElement = document.createElement("search-item");
            artistItemElement.artist = artist;
            this.appendChild(artistItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
} 

customElements.define("search-result", SearchResult);