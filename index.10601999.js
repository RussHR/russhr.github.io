let t,e;let n=!1;function o(){if(!t)return;t.innerHTML="";let e=window.innerHeight,n=window.innerWidth,o=Math.max(Math.floor(e/100),1),a=Math.max(Math.floor(n/100),1);for(let e=0;e<o;e++)for(let e=0;e<a;e++){let e=document.createElement("div");e.classList.add("bg-cell"),e.classList.add(`rotation-${Math.floor(4*Math.random())}`),e.classList.add(`tf-origin-${Math.floor(5*Math.random())}`),e.classList.add(`color-${Math.floor(4*Math.random())}`),t.appendChild(e)}}const a=// from https://www.freecodecamp.org/news/javascript-debounce-example/
function(t,e=50){let n;return()=>{clearTimeout(n),n=setTimeout(t,e)}}(o);function d(){(n=!n)&&t?t.classList.add("hidden"):t&&t.classList.remove("hidden")}document.onreadystatechange=()=>{t=document.getElementById("background"),(e=document.getElementById("toggle-background"))&&e.addEventListener("click",d),o(),window.addEventListener("resize",a)};//# sourceMappingURL=index.10601999.js.map

//# sourceMappingURL=index.10601999.js.map
