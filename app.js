let color1 = document.querySelector(".color1") ;
let color2 = document.querySelector(".color2") ;
let area = document.getElementById("area") ;
let text = document.querySelector("h3") ;

const setgradient = () => {
      area.style.background =`linear-gradient(to right,
                                    ${color1.value }
                                    ,
                                     ${color2.value} 
                                     )`;
                                                        
      text.textContent = area.style.background ;
}
color1.addEventListener("input" , setgradient);
color2.addEventListener("input" , setgradient);

