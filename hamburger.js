var hamburger = document.querySelector('.hamburger');
let isModalOpen = false;

const handleHamburger = ()=>{

    
   
     if (!isModalOpen) {
          document.querySelector(".hamburger-modal").style.display = "block";
          document.querySelector("ion-icon").style.color = "#fff";
          document.querySelector(".white-logo").style.display = "block";
          document.querySelector(".logo").style.display = "none";
          
        } else {
          document.querySelector(".hamburger-modal").style.display = "none";
          document.querySelector("ion-icon").style.color = "#000";
          document.querySelector(".logo").style.display = "block";
          document.querySelector(".white-logo").style.display = "none";
        }
        isModalOpen = !isModalOpen;     


};

window.addEventListener('resize',()=>{
  if(window.innerWidth > 600){
    document.querySelector(".hamburger-modal").style.display = "none";
    document.querySelector(".logo").style.display = "block";
    document.querySelector("ion-icon").style.color = "#000";
    document.querySelector(".white-logo").style.display = "none";
  }
})

window






hamburger.addEventListener('click',handleHamburger);