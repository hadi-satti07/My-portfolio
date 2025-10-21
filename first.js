document.body.style.opacity = "1";

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
  }
});
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Stop instant navigation
    const href = this.getAttribute('href');

    // Optional: Add fade-out effect to body
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = href; // Redirect after 0.5s
    }, 500); // 0.5 seconds = 500 milliseconds
  });
});
// document.querySelectorAll('a[class^="view"]').forEach(link => {
//   link.addEventListener('click',function(e){
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.body.style.transition = "opacity 0.5s ease";
//     document.body.style.opacity = "0";
//     setTimeout(()=>{
//    window.open(href, "_blank") = href;
//     },30000);
//   });
// });
