
function acepto(){
  alert("Gracias por decir sí 💖 Prometo amarte con palabras y hechos.");
}
// 🌠 Estrellas fugaces
setInterval(()=>{
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random()*200 + "px";
  star.style.left = Math.random()*window.innerWidth + "px";
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),2000);
}, 3000);

// 💖 Corazones brillantes
setInterval(()=>{
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random()*window.innerWidth + "px";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}, 500);
