export class Home extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML='<menu-icones></menu-icones>';
    }
}