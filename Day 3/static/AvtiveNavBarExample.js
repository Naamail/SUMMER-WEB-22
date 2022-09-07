console.log(window.location);
console.log(window.location.pathname);

const activePage = window.location.pathname;

var u = document.querySelectorAll('div a');
console.log(document.querySelectorAll('div a'));

const navLinks = document.querySelectorAll('div a').forEach(link => {
    console.log("im foreach loop");
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');

    }
});

/*
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });
  */