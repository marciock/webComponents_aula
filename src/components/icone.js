export class Icone extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){

        const div=document.createElement('div');
        const col=document.createElement('div');
        const img=document.createElement('img');
        const a=document.createElement('a');
        const h4=document.createElement('h4');

        let src=this.getAttribute('src');
        let texto=this.getAttribute('texto');
        let tamanho=this.getAttribute('size');
        let url=this.getAttribute('url');

        col.classList.add('col-sm-4', 'align-center');
        img.src=src;
        img.style=`width:${tamanho}; height:auto;`;
        h4.innerText=texto;
        
        a.href=url;


        a.appendChild(img);
        a.appendChild(h4);

        div.appendChild(a);
        col.appendChild(div);

        this.appendChild(col);




    }
}