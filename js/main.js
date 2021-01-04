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
import { pizzaData } from './data/content/pizza.js';
import { snacksData } from './data/content/snacks.js';
import { dessertsData } from './data/content/desserts.js';
import { drinksData } from './data/content/drinks.js';
import { otherGoodsData } from './data/content/otherGoods.js';
import { Content } from './components/content/Content.js';
// Delivery and payment import
import { delPayData } from './data/delPay.js';
import { DelPay } from './components/delPay/DelPay.js';
// footer import
// terms and condition import


// header logic
new Header(headerData);
// menu logic
new Menu(menuData);
// intro logic
new Intro(introData);
// content logic
new Content(pizzaData, snacksData, dessertsData, drinksData, otherGoodsData);
// Delivery and payment logic
new DelPay(delPayData);
// footer logic
// terms and condition logic
