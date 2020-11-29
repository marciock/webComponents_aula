export class Teste extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const div=document.createElement('div');
        div.classList.add('row','mt-5');

        const menu=[
            {   
                id:'1',
                imagem:'./imagens/produtos.jpg',
                texto:'Canivete',
                url:'#/kama'
            },
            {
                id:'2',
                imagem:'./imagens/marcas.jpg',
                texto:'Pastas',
                url:'#/pastas'
            },
            {
                id:'3',
                imagem:'./imagens/usuarios.jpg',
                texto:'Malote',
                url:'#/malote'
            },

        ];

        menu.map((i=>{
            let icone=`<card-menu id="${i.id}" src="${i.imagem}" 
            text="${i.texto}"  link="${i.url}"  />`;
            div.innerHTML +=icone;
        })).join('');// join responsavel para retirar caracteres vazios
        

        

        this.appendChild(div);
    }
}