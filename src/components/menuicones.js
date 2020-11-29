export class MenuIcones extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const div=document.createElement('div');
        div.classList.add('row','mt-5');

        const menu=[
            {   
                id:'1',
                imagem:'./imagens/01.svg',
                texto:'Canivete',
                url:'#/kama'
            },
            {
                id:'2',
                imagem:'./imagens/02.svg',
                texto:'Pastas',
                url:'#/pastas'
            },
            {
                id:'3',
                imagem:'./imagens/03.svg',
                texto:'Malote',
                url:'#/malote'
            },

        ];

        menu.map((i=>{
            let icone=`<icone-img id="${i.id}" src="${i.imagem}" 
            texto="${i.texto}"  url="${i.url}" size="150px"/>`;
            div.innerHTML +=icone;
        })).join('');// join responsavel para retirar caracteres vazios
        

        

        this.appendChild(div);
    }
}