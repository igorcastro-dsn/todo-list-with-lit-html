import { html, render } from "https://unpkg.com/lit-html?module";

export class Menu extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });        
        this.render();
    }

    render() {
        render(
            html` 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo"></a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a target="_blank" href="https://martinfowler.com/articles/micro-frontends.html">Micro Frontends</a></li>
                        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a></li>
                        <li><a target="_blank" href="https://lit-html.polymer-project.org/">Lit-html</a></li>
                        <li><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            `, 
            this.shadowDOM
        );
    }
}

customElements.define("wc-menu", Menu);

