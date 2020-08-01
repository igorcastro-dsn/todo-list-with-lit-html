import { html, render } from "https://unpkg.com/lit-html?module";

export class TodoList extends HTMLElement {
    
    constructor() {
        super();

        this.newItem = '';
        this.items = []; this.shadowDOM = this.attachShadow({ mode: "open" });
        this.render();

        this.setNewItem = event => {
            this.newItem = event.target.value;
        }
    }

    getNewItem() {
        return this.newItem;
    }

    addListItem() {
        if (this.newItem) {
            this.items.push(this.newItem);
            this.newItem = '';
            this.render();
        }
    }

    removeListItem(e) {
        e.target.parentNode.remove();
    }

    render() {
        render(
            html` 
            <link rel="stylesheet" type="text/css" href="todo-list.css">

            <div class="editable-list">
                <h3>${this.title}</h3>
                <ul class="item-list">
                    ${this.items
                        .map((item) => html`
                            <li>
                                ${item}
                                <button class="editable-list-remove-item icon"
                                        @click=${(e) => this.removeListItem(e)}>
                                    &ominus;
                                </button>
                            </li>`
                        )}
                </ul>
                <div>
                    <input class="add-new-list-item-input" type="text" .value=${this.getNewItem()} @input=${(e) => this.setNewItem(e)}>
                    <button class="editable-list-add-item icon" @click=${() => this.addListItem()}>
                        &oplus;
                    </button>
                </div>
            </div>`, this.shadowDOM
        );
    }
}

customElements.define("wc-todo-list", TodoList);
