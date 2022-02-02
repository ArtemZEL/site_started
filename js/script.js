'use strict';

const box=document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles=document.getElementsByClassName('circle'),
      wrapper=document.querySelector('.wrapper'),
      hearts=wrapper.querySelectorAll('.heart'),
      oneHeart=wrapper.querySelector('.heart');
     

// box.style.backgroundColor='blue';      
// box.style.width='500px';      
box.style.cssText='background-color: blue; width: 500px';
btns[1].style.borderRadius='100%';
circles[0].style.backgroundColor='red';


// for(let i=0; i<hearts.length; i++){
//     hearts[i].style.backgroundColor='blue';
// }

hearts.forEach(item=>{
 item.style.backgroundColor='blue';
});

const div = document.createElement('div');
// const text=document.createTextNode('Тут был валера');

div.classList.add('black');


wrapper.append(div);
// wrapper.appendChild(div);//обращение к родителю элемента
// wrapper.prepend(div);

// hearts[0].before(div);//было
// hearts[0].after(div);//стало
// wrapper.insertBefore(div, hearts[1]);


// circles[0].remove();//delete
// wrapper.removeChild(hearts[1]);



hearts[0].replaceWith(circles[0]);//замена елемента другим
// wrapper.replaceChild(circles[0],hearts[0]);

div.innerHTML="<h1>Hello World</h1>";//добавление текста уже в Html страницу



// div.textContent="<h1>Hello World</h1>";//обычное добавление текста 

div.insertAdjacentHTML("afterend",'<h2>Hello</h2>');
