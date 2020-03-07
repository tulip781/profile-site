const navbar = document.querySelector('.navbar');
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

window.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.isVisited) {
      getNewRandomColor();
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


