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