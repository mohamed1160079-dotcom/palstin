var d1b1=document.querySelector('#d1b1');
var d1b2=document.querySelector('#d1b2');
var d2b1=document.querySelector('#d2b1');
var d2b2=document.querySelector('#d2b2');
var d3b1=document.querySelector('#d3b1');
var d3b2=document.querySelector('#d3b2');

var d1=document.querySelector('#d1');
var d2=document.querySelector('#d2');
var d3=document.querySelector('#d3');
var d4=document.querySelector('#d4');
var d5=document.querySelector('#d5');

var h2=document.querySelector('#h2');


var width=1;
var bar2 = document.querySelector('.bar2');


d1b1.addEventListener('click', () => {
    d1.classList.add('sr-only');
    d2.classList.remove('sr-only');
    d2.classList.add('divanim');
});
d1b2.addEventListener('click', () => {
    d1.classList.add('sr-only');
    d2.classList.remove('sr-only');
    d2.classList.add('divanim');
});



d2b1.addEventListener('click', () => {
    d2.classList.add('sr-only');
    d3.classList.remove('sr-only');
    d3.classList.add('divanim');
});
d2b2.addEventListener('click', () => {
    d2.classList.add('sr-only');
    d3.classList.remove('sr-only');
    d3.classList.add('divanim');
});



d3b1.addEventListener('click', () => {
    d3.classList.add('sr-only');
    d4.classList.remove('sr-only');
    d4.classList.add('divanim');
    setInterval(function(){
        if(width<100)
        {
            width++;
            bar2.style.width = width+2 + "%";
        }
        else{
            d4.classList.add('sr-only');
            d5.classList.remove('sr-only');
            d5.classList.add('divanim');
            h2.classList.add('sr-only');
        }
    },25);
});
d3b2.addEventListener('click', () => {
    d3.classList.add('sr-only');
    d4.classList.remove('sr-only');
    d4.classList.add('divanim');
    setInterval(function(){
        if(width<100)
        {
            width++;
            bar2.style.width = width+2 + "%";
        }
        else{
            d4.classList.add('sr-only');
            d5.classList.remove('sr-only');
            d5.classList.add('divanim');
            h2.classList.add('sr-only');
        }
    },25);
});