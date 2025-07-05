let cart = document.querySelectorAll(".fa-basket-shopping");
let menuBar = document.querySelector("#menu-bar");
let ul = document.querySelector("ul");

cart.forEach((crt)=>{
    crt.addEventListener("click",()=>{
        if(crt.style.color==="white") {
            crt.style.color = "#ffbc0d";
        } else {
            crt.style.color = "white";
        }
    })
})

menuBar.addEventListener("click",()=>{
    if(ul.style.display === "none") {
        ul.style.display = "block";
        setTimeout(() => {
            ul.style.display = "none"
        }, 5000);
    }else {
        ul.style.display = "none"
    }
}
) 