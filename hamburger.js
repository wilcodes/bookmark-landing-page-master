var hamburger = document.querySelector('.hamburger');
let isModalOpen = false;

const handleHamburger = ()=>{
   
     if (!isModalOpen) {
          document.querySelector(".hamburger-modal").style.display = "block";
          
        } else {
          document.querySelector(".hamburger-modal").style.display = "none";
        }
        isModalOpen = !isModalOpen;     


};



hamburger.addEventListener('click',handleHamburger);