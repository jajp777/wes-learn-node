import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autoComplete from './modules/autoComplete.js';
import typeAhead from './modules/typeAhead';

import makeMap from './modules/map';

import  ajaxHeart from './modules/heart.js'
autoComplete($('#address'),$('#lat'),$('#lng'));

typeAhead($('.search'));
makeMap($('#map'));

const heartForms = $$('form.heart');
heartForms.on('submit', ajaxHeart);
//console.log(heartForms);