const portfolioBtn=document.getElementById("portfolioBtn")
const taskManagerBtn=document.getElementById("taskManagerBtn")

portfolioBtn.addEventListener("click",(event)=>{ 
  event.preventDefault(); // stops page from reloading for <a>
    window.open("https://www.pramoddhami.com.np/", "_blank",'noopener,noreferrer');}
  
)
taskManagerBtn.addEventListener("click",(event)=>{
   event.preventDefault(); // stops page from reloading for <a>
    window.open("https://task-manager-flaskproject-1.onrender.com/", "_blank",'noopener,noreferrer');
})


// js for skill section
// Select all skill cards
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  const header = card.querySelector('.skill-header');
  
  header.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

//js for contact form
// Select the contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission

  // Optional: Do something here (like send data via AJAX)

  // Reload the page
  window.location.reload();
});
