const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]


toggleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle("active")
})

const form = document.getElementById("form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const msg = document.getElementById("mensaje")
const errorElement = document.getElementById("error")

form.addEventListener("submit",(e)=>{
    let errores = []
    if (fname.value==="" || fname.value==null){
        errores.push("Nombre es obligatorio")
    }
    if (lname.value==="" || lname.value==null){
        errores.push("Apellido es obligatorio")
    }
    if (email.value==="" || email.value==null){
        errores.push("Campo no debe permanecer vacio")
    }
    if (msg.value==="" || msg.value==null){
        errores.push("Campo Mensaje es obligatorio")
    }
    if (errores.length>0){
        e.preventDefault();
        errorElement.innerText = errores.join(", ")

    }
})

