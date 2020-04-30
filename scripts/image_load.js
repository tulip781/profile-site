const posters = [...document.querySelectorAll('.project2-card-image')];

const fadeImg =  (event, poster) => {
  poster.style.transition = "opacity 2s";
  poster.style.opacity = "1";
  poster.style.transition = "transform 2s";
  poster.style.transform = "translate(0,0)"
}

posters.forEach((poster) => {
  poster.addEventListener('load', fadeImg(event, poster));
})


const titles = [...document.querySelectorAll('.project2-card-title')]

titles.forEach((title) => {
  title.addEventListener('load', fadeImg(event, title));
})

const apps = [...document.querySelectorAll('.project2-card-app-type')]

apps.forEach((app) => {
  app.addEventListener('load', fadeImg(event, app));
})
