window.addEventListener("scroll", () => {
  const nav = document.getElementById("navHeader");
  const logo = document.getElementById("logo");
  const about = document.getElementById("aboutLink");
  const projects = document.getElementById("projectsLink");
  const contact = document.getElementById("contactLink");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    logo.classList.add("scrolled");
    about.classList.add("scrolled");
    projects.classList.add("scrolled");
    contact.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    logo.classList.remove("scrolled");
    about.classList.remove("scrolled");
    projects.classList.remove("scrolled");
    contact.classList.remove("scrolled");
  }
});
