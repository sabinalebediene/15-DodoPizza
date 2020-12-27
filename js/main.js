// header import
import { headerData } from './data/header.js';
import { Header } from './components/header/Header.js';
// menu import
import { menuData } from './data/menu.js';
import { Menu } from './components/menu/Menu.js';
// intro import
import { introData } from './data/intro.js';
import { Intro } from './components/intro/Intro.js';
// content import
import { pizzaData } from './data/pizza.js';
import { snacksData } from './data/snacks.js';
import { Content } from './components/content/Content.js';
// Delivery and payment import
// footer import
// terms and condition import


// header logic
new Header(headerData);
// menu logic
new Menu(menuData);
// intro logic
new Intro(introData);
// content logic
new Content(pizzaData, snacksData);
// Delivery and payment logic
// footer logic
// terms and condition logic
