export class Card extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const div=document.createElement('div');

        div.classList.add('col-sm-4');

        let src=this.getAttribute('src');
        let title=this.getAttribute('title')
        let description=this.getAttribute('description');
        let link=this.getAttribute('link');
        let text=this.getAttribute('text');

        let card = `<div class="card" style="width: 18rem;">
        <img src="${src}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${link}" class="btn btn-primary">${text}</a>
        </div>
      </div>`;

      div.innerHTML=card;
      this.appendChild(div);
    }
}