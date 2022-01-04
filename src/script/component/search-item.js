class SearchItem extends HTMLElement {
    set artist(artist) {
        this._artist = artist;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card">
            <div class="image-result">
                <img src="${this._artist.strArtistThumb}" alt="${this._artist.strArtist}">
            </div>
            <div class="info-result">
                <h3>${this._artist.strArtist}</h3>
                <h4>${this._artist.strGenre}</h4>
                <p>${this._artist.strBiographyEN}</p>
            </div>
        </div>`;
    }
}

customElements.define("search-item", SearchItem);