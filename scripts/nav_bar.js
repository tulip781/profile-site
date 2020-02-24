const myFunction = () => {
  const x = document.getElementById("myNavbar");
  if (x.className === "navbar active") {
    x.className += " responsive";
  } else {
    x.className = "navbar active";
  }
}

