
/**
 * Validadores de Formulários - Semantic UI
 */
//Passando Arquivos JS Tiago_Perri//
require('../functions/Tiago_Perri');

require('../vendors/validators');
//--------------------[ Correios ]--------------------//
require('../functions/correios');
//--------------------[ Form Starters ]--------------------//
require('./starters/formManipulation');

//--------------------[ PayPal ]--------------------//
require('./modules/paypal');

//--------------------[ Menu ]--------------------//
//Mega Menu
require('./modules/menu');
//Menu Flutuante
require('./modules/floatingMenu.js');
//--------------------[ CheckOut ]--------------------//
require('./modules/checkout');
require('./modules/mini_cart');

//--------------------[ Filters ]--------------------//
require('./modules/filters');
//--------------------[ Product ]--------------------//
require('./modules/product');
require('./modules/product_details');
//--------------------[ Review ]--------------------//
require('./modules/review');
//--------------------[ Slideshow ]--------------------//
require('./modules/slideshow');
//--------------------[ Client Register ]--------------------//
require('./modules/register');
//--------------------[ Client Edit ]--------------------//
require('./modules/editCustomer');
//--------------------[ Client Mascára ]--------------------//
require('./modules/mask');
//--------------------[ DatePicker ]--------------------//
require('./modules/jquery-ui.min');
//--------------------[ LazyLoad ]--------------------//
require('../functions/lazy_load');

//--------------------[ Start Document ]--------------------//
$(document).ready(function(){
    "use strict";
    
    setTimeout(function (){
        $(".intial-loader").fadeOut(800, function(){
            $(this).remove();
        });
    }, 1000);
});

window.imgError = function imgError(event) {
    $(event).attr('data-old-src', $(event).attr('src'));
    $(event).attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAXcCAIAAAC3V9szAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzU4NTA1RjIwNzQxMUUzOUEyMEY0NDFBRDNDQ0Y1RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzU4NTA2MDIwNzQxMUUzOUEyMEY0NDFBRDNDQ0Y1RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NTg1MDVEMjA3NDExRTM5QTIwRjQ0MUFEM0NDRjVEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3NTg1MDVFMjA3NDExRTM5QTIwRjQ0MUFEM0NDRjVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8D+MsQAAPLdJREFUeNrs3QlzEweiteF4kY0Bb5jFDEtI5mbm+///5g4ZzJZgE++WLVuypdvQX6WomQBedXp5nqKmSCYVq49cSH7T3ZrY2N77AQAAAIDxmjQBAAAAwPiJMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgDAAAAECDKAAAAAASIMgAAAAABogwAAABAgCgD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AAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAERBkAAACAgCgDAAAAEBBlAAAAAAKiDAAAAEBAlAEAAAAIiDIAAAAAAVEGAAAAICDKAAAAAAREGQAAAICAKAMAAAAQEGUAAAAAAqIMAAAAQECUAQAAAAiIMgAAAAABUQYAAAAgIMoAAAAABEQZAAAAgIAoAwAAABAQZQAAAAACogwAAABAQJQBAAAACIgyAAAAAAFRBgAAACAgygAAAAAE/luAAQDuTxHEQ8GXwwAAAABJRU5ErkJggg==");
}
