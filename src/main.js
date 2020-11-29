window.supportCustomElements="customElements" in window;
import './routes/routes.js';
import {Icone} from './components/icone.js';
import { MenuIcones } from './components/menuicones.js';
import { Home } from './components/home.js';
import {Canivete} from './components/canivete.js';
import {Card} from './components/card.js';
import {Teste} from './components/teste.js';

window.customElements.define('icone-img',Icone);
window.customElements.define('menu-icones',MenuIcones);
window.customElements.define('home-page',Home);
window.customElements.define('canivete-page',Canivete);
window.customElements.define('card-menu',Card);
window.customElements.define('teste-page',Teste);

