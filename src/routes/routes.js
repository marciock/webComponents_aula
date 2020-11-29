import {Router} from './router.js';

let Home=document.createElement('teste-page');
let Canivete=document.createElement('canivete-page');

let routes=[
    {
        pathName:'/',
        viewName: Home
    },
    {
        pathName:'/kama',
        viewName:Canivete
    }

]

export default Router(routes);