const bgColour = () => {
  const nav = document.querySelector('.navbar');
  if (document.getElementById("about-body")) document.getElementById('about-body').style.backgroundColor = localStorage.getItem("usercolour");
  if (document.getElementById("big-html")) document.getElementById('big-html').style.backgroundColor = localStorage.getItem("usercolour");
  nav.style.transition = 'opacity 0s';
  nav.style.opacity = '1';
  nav.style.backgroundColor = localStorage.getItem("usercolour");
}

window.onLoad = bgColour();
