// (()=> {
//     const $ = function(selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};
        
//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };
//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     };

//     window.$ = $;
// })();

const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if(!selector) {
        return this; // просто пустой объект {}
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype; // Важно присвоение прототипу init прототипа главное функции
window.$ = $;

export default $;