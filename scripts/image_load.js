const posters = [...document.querySelectorAll('.project2-card-image')];

const fadeImg =  (event, poster) => {
  poster.style.transition = "opacity 2s";
  poster.style.opacity = "1";
  console.log("ollie laoder")
}

posters.forEach((poster) => {
  poster.addEventListener('load', fadeImg(event, poster));
})


