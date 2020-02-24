
const shuffle = document.querySelector('.shuffle');
const navbar = document.querySelector('.navbar');
const splashText = document.querySelector('.load');
const image = document.querySelector('.homepage-image-div')
const body = document.querySelector("body")

const getNewRandomColor = () => {
  const myArray = ['#ebe2da', '#dddddd', '#dbc8bc', '#958e7d', '#D3D3D3', "#ECE5BD"];
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("body").style.backgroundColor = rand;
  document.querySelector('.navbar').style.backgroundColor = rand;
  let colour = document.getElementById("body").style.backgroundColor;
  localStorage.setItem("usercolour",colour);
}

const hideSplashText = () => {
  splashText.style.transition = 'opacity 1s ease, transform 1s ease';
  splashText.style.transform = 'translate(-50%, -50%) scale(1.1)';
  splashText.classList.remove('active');
}

const revealImageAndNav = () => {
  image.classList.add('active');
  navbar.classList.add('active');
}

const revealSplash = () => {
  splashText.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.isVisited) {
      getNewRandomColor();
      setTimeout(revealSplash, 100);
      setTimeout(hideSplashText, 2000);
      setTimeout(revealImageAndNav, 2700);
      sessionStorage.setItem('isVisited', true)
    } else {
      body.style.backgroundColor = localStorage.getItem("usercolour");
      navbar.style.backgroundColor = localStorage.getItem("usercolour");
      image.style.transition = 'opacity 0s';
      navbar.style.transition = 'opacity 0s';
      image.classList.add('active');
      navbar.classList.add('active');
    }
});

shuffle.addEventListener('click', (event) => {
  getNewRandomColor()
});

