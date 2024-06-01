

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  const bara = document.querySelector('.fa-bars');
  bara.style.opacity = "0";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
  const bara = document.querySelector('.fa-bars');
  bara.style.opacity = "1";
}

const icon = document.querySelector('.close'),
open = document.querySelectorAll('.open'),
wrapper = document.querySelector('.wrapper'),
wrapper2 = document.querySelector('.wrapper2');

icon.addEventListener('click', ()=>{
   wrapper2.style.display = "none";
});
          
open.forEach(button =>
  button.addEventListener("click", ()=>{
      wrapper2.style.display = "block";
}));
 
function ioo(){
 const tsyaseho = document.querySelector('.tsyaseho');
 tsyaseho.style.display = "flex";
}               
function io(){
  const tsyaseho = document.querySelector('.tsyaseho');
  tsyaseho.style.display = "none";
}

function fermeo(){
  const victoire = document.querySelector('.victoire');
  victoire.style.display = "none";
  window.location.reload();
} 

// ======================start ==================================
function afficherMotsDansDomino() {
  const motA = document.getElementById('inputA').value.trim() || 'A',
  motB = document.getElementById('inputB').value.trim() || 'B',
  motC = document.getElementById('inputC').value.trim() || 'C';
  
  sessionStorage.setItem('motA', motA);
  sessionStorage.setItem('motB', motB);
  sessionStorage.setItem('motC', motC);
}

const boutonGo = document.querySelector('.go');
wrapper3 = document.querySelector('#wrapper3');
wrapper1 = document.querySelector('#wrapper1');
boutonGo.addEventListener('click',()=>{
  afficherMotsDansDomino();
  wrapper3.style.display = "block";
  wrapper1.style.display = "none";

    // recuperer les valeurs saisies
  const motA = sessionStorage.getItem('motA') || 'A';
  const motB = sessionStorage.getItem('motB') || 'B';
  const motC = sessionStorage.getItem('motC') || 'C';

  document.getElementById('motA').textContent = motA;
  document.getElementById('motB').textContent = motB;
  document.getElementById('motC').textContent = motC;
});


// ===========================================================================
// ===========================================================================
document.addEventListener("DOMContentLoaded", function() {
  const inputFields = document.querySelectorAll('.inputField');
  inputFields.forEach(function(input) {
      const icon = document.getElementById(input.dataset.target);
      icon.addEventListener('click', function() {
          validerInput(input.id);
      });
  });
});

function validerInput(inputId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(input.dataset.target);
  const value = input.value.trim();

  const motA = sessionStorage.getItem('motA') || 'A';
  const motB = sessionStorage.getItem('motB') || 'B';
  const motC = sessionStorage.getItem('motC') || 'C';

  if (value !== "") {
      if(!input.dataset.dejaAjoute){  
        input.disabled = true;
        icon.classList.add('valid');
        input.value = value;

        // Get the previous total value
        const previousTotal = parseInt(document.getElementById("totalScore").textContent.split(":")[1], 10) || 0;
        const previousTotal1 = parseInt(document.getElementById("totalScore1").textContent.split(":")[1], 10) || 0;
        const previousTotal2 = parseInt(document.getElementById("totalScore2").textContent.split(":")[1], 10) || 0;
        
        // Check if the input is in the "col1" column
        if  (input.parentElement.id === "col1") {
            const newTotal = previousTotal + parseInt(value, 10);
            document.getElementById("totalScore").textContent = `Total : ${newTotal}`;
              
            if (newTotal >= 120) {
                  const victoire = document.querySelector('.victoire');
                  victoire.style.display = "block";
                  const victory = document.querySelector('.victory');
                  victory.textContent = ` ${motA}`;
            
              const inputs = document.querySelectorAll("#col1 input");
              for (const input of inputs) {
                input.value = "";
              }
            }
        
        }else if(input.parentElement.id === "col2"){
            const newTotal1 = previousTotal1 + parseInt(value, 10);
            document.getElementById("totalScore1").textContent = `Total: ${newTotal1}`;
        
            if (newTotal1 >= 120) {
              const victoire = document.querySelector('.victoire');
              victoire.style.display = "block";
                  const victory = document.querySelector('.victory');
                  victory.textContent = ` ${motB}`;

              const inputs = document.querySelectorAll("#col2 input");
              for (const input of inputs) {
                input.value = "";
              }
            }
            
        }else{
            const newTotal2 = previousTotal2 + parseInt(value, 10);
            document.getElementById("totalScore2").textContent = `Total: ${newTotal2}`;
        
            if (newTotal2 >= 120) {
            const victoire = document.querySelector('.victoire');
                  victoire.style.display = "block";
                  const victory = document.querySelector('.victory');
                  victory.textContent = ` ${motC}`;

              const inputs = document.querySelectorAll("#col3 input");
              for (const input of inputs) {
                input.value = "";
              }
            }
        }
        input.dataset.dejaAjoute = true; 
      }
    }
}

// function click navbar 
const redirectabout = () =>{
  const about = document.querySelector('#home-about');
  const home1 = document.querySelector('#home1');
  if (about.style.display === "block"){
    about.style.display = "none";
    home1.style.display = "block";
  }else{
    about.style.display = "block";
    home1.style.display = "none";
  }
  closeNav();
}
const redirecthome = () =>{
  const about = document.querySelector('#home-about');
  const home1 = document.querySelector('#home1');
  if (about.style.display === "block"){
    about.style.display = "none";
    home1.style.display = "block";
  }else{
    about.style.display = "block";
    home1.style.display = "none";
  }
  closeNav();
}
const redirectohome =()=>{
  const wrapper1 = document.querySelector('#wrapper1');
  const wrapper3 = document.querySelector('#wrapper3');
  const wrapper2 = document.querySelector('.wrapper2');
  if (wrapper3.style.display === "block"){
    wrapper3.style.display = "none";
    wrapper1.style.display = "block";
    wrapper2.style.display = "none";
  }else{
    wrapper3.style.display = "block";
    wrapper1.style.display = "none";
  }
}