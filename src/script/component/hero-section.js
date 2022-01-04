import arrow from '../../assets/images/arrow.svg';
import hero from '../../assets/images/hero.svg';

class HeroSection extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <section class="hero">
            <div class="title-heading">
                <h1>Find Musician</h1>
                <p>Get to know your selected musician information here.</p>
                
                <div class="get-started">
                    <h2>Get Started</h2>
                    <a href="#search-feature" class="arrow-icon"><img src="${arrow}" alt=""></a>
                </div>
            </div>
            <div class="hero-illust">
                <img src="${hero}" alt="Hero">
            </div>
        </section>`;
    }
} 

customElements.define("hero-section", HeroSection);