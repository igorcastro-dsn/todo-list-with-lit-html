import { html, render } from "https://unpkg.com/lit-html?module";

export class TodoList extends HTMLElement {
    
    constructor() {
        super();

        this.newItem = "";
        this.items = []; 

        this.shadowDOM = this.attachShadow({ mode: "open" });
        
        this.render();

        this.setNewItem = event => {
            this.newItem = event.target.value;
        }
    }

    addListItem(e) {
        e.preventDefault();
        if (this.newItem) {
            this.items.push(this.newItem);
            this.newItem = "";
            this.clearInput();
            this.render();
        }
    }

    clearInput() {
        const input = this.shadowRoot.querySelector(".add-new-list-item-input");
        input.value = "";
    }

    removeListItem(e) {
        e.target.parentNode.remove();
    }

    toggleCheckbox(e) {
        var toDoItem = e.target.nextElementSibling;
        if (e.target.checked) {
            toDoItem.classList.add("done");
        } else {
            toDoItem.classList.remove("done");
        }
    }

    render() {
        render(
            html` 
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="stylesheet" href="todo-list.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
            <h4>Welcome to My To Do List</h4>
            <p>
                This example uses the lit-html to render html templates. 
                <br>More informations <a target="_blank" href="https://lit-html.polymer-project.org/">here</a>.
            </p>

            <div class="editable-list">
                <h3>${this.title}</h3>
                <ul class="item-list">
                    ${this.items
                        .map((item) => html`
                        <li class="todo-item">
                            <label>
                                <input @click=${e => this.toggleCheckbox(e)} type="checkbox" />
                                <span>${item}</span>
                                <i class="material-icons close-icon" @click=${this.removeListItem}>close</i>
                            </label>
                        </li>`
                        )}
                </ul>
                <form @submit=${e => this.addListItem(e)}>
                    <input class="add-new-list-item-input" type="text" @input=${(e) => this.setNewItem(e)} autofocus>
                </form>
            </div>`, 
            this.shadowDOM
        );
    }
}

customElements.define("wc-todo-list", TodoList);

