export class Canivete extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML='<h1>Canivete</h1>';
    }
}