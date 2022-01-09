
const header = document.querySelector('header');
const menuToggle = header.querySelector('.menu-toggle');
const mainMenu = header.querySelector('nav');

menuToggle.addEventListener('click', (e) => {
  toggleExpanded(e);
  toggleActive(mainMenu);
});

function toggleExpanded(e){
  if(e.currentTarget.getAttribute("aria-expanded") === "false"){
    e.currentTarget.setAttribute("aria-expanded", true);
  }else{
    e.currentTarget.setAttribute("aria-expanded", false);
  }
}

function toggleActive(element){
  if(element.getAttribute('data-visible') === "false"){
    element.setAttribute("data-visible", true);
  }else{
    element.setAttribute("data-visible", false);
  }
}

