import wave from '../../assets/images/wave.svg';
import ci_hamburger from '../../assets/images/ci_hamburger.svg';

class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="wave">
            <img src="${wave}" alt="">
        </div>
        <div class="nav-hamburger">
            <a class="hamburger" id="hamburger"><img src="${ci_hamburger}" alt=""></a>
        </div>
        <div class="nav-links">
            <a href="#" class="link-home" id="nav-list">Home</a>
            <a href="#search-feature" class="link-start" id="nav-list">Get Started</a>
        </div>`;
    }
 }

 customElements.define("app-bar", AppBar);