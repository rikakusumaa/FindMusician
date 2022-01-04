import bi_search from '../../assets/images/bi_search.svg';

class SearchFeature extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <section class="search-feature" id="search-feature">
            <div class="search-title">
                <h2 class="main-title">Find the Musician</h2>
                <p class="title-desc">by entering the musician name.</p>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="type any musician name here..." class="search-items" id="search-input">
                <a class="search-items" id="search-icon"><img src="${bi_search}"></a>
            </div>
        </section>`;
    }
} 

customElements.define("search-feature", SearchFeature);