// Creamos los selectores 1
let countries = document.querySelector("#countries");
let username = document.querySelector("#user"); // 1 crear el selector
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");
let phonecode = document.querySelector("#phone-code");
let passWord = document.querySelector("#password");
let confirmPas = document.querySelector("#confirm-password");
let btn = document.querySelector("#btn")

//RegEx  Expresiones regulares, patrones de busqueda para cadenas de texto

const userRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const emailRegex = /^\S+@\S+\.\S{3,4}$/;
const phonenumberRegex = /^[0-9]{6,16}$/; // esto es un "^" anceto circunflejo, S cualquier letra y numeros, (2,3) el primer numero es el minimo y el segundo el maximo
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;

let arrayCountries = [...countries];

arrayCountries.forEach((country) => {
  let onlyCountry = country.innerText.split("(")[0];
  country.innerHTML = onlyCountry;
});

//operador de propagación,// esto es para convertir un objeto iterable en un arreglo
//en este caso, estamos convirtiendo un objeto HTMLCollection a un arreglo
//interacion del arreglo de paises,esta es una forma de recorrer un arreglo
//con el forEach, estamos recorriendo cada elemento del arreglo y ejecutando una funcion
//split divide una cadena en subcadenas usando un separador en especifico


let usernameValidation = false
let emailValidation = false
let phoneNumbervalidation = false
let passWordvalidation = false
let countriesValidation = false





//validaciones paso 2


username.addEventListener("input", (e) => {
  let info = e.target.parentElement.children[2];
  usernameValidation = validation(e, userRegex, username, info);
 verificarTodo()
  
   
  

});

email.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
    emailValidation = validation(e, emailRegex, email, info);
   verificarTodo()
    
    
});

countries.addEventListener("change", function () {
  codeNumber = this.value;
  phonecode.innerHTML = `+${codeNumber}`;
   countriesValidation = this.value !== "Seleccione un Pais"
 verificarTodo()
  
   
  
});

phoneNumber.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
  phoneNumbervalidation= validation(e, phonenumberRegex, phoneNumber, info);
  verificarTodo()
  

});

passWord.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
   passWordvalidation = validation(e, passwordRegex, passWord, info);
  verificarTodo()
  
 
});






// funcion para validar

function validation(e, regex, selector, info) {
    let inputValue = e.target.value; // 3 obtener el valor del evento "input"
    let validate = regex.test(inputValue); // 4 para validar es .test()// devuelve valor
    
    if (validate) {
      selector.classList.remove("notValidate");
      selector.classList.add("isValidate");
      
      info.classList.add("user-info");
      
      //informacion de mensaje
    } else {
      selector.classList.add("notValidate");
      info.classList.remove("user-info");
    }
    return validate;
  }
  
  //funcion para validar  password
  
  confirmPas.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
    const passWordv= passWord.value
    const confirpass = confirmPas.value
    
    
    
    //validation(e, passwordRegex, passWord, confirmPas);
    
    const isValid = passwordRegex.test(confirpass);
    
    if (isValid && confirpass === passWordv) {
      confirmPas.classList.add("isValidate");
      confirmPas.classList.remove("notValidate");
      info.classList.add("user-info");
    } else {
      confirmPas.classList.add("notValidate");
      confirmPas.classList.remove("isValidate");
      info.classList.remove("user-info");
    
    }
   verificarTodo()
   
  });
  


  
// Función para verificar todas las validaciones y activar/desactivar el botón
function verificarTodo() {
    // Verificamos que todos los campos estén validados
    const todo = usernameValidation && 
                    emailValidation && 
                    phoneNumbervalidation && 
                    passWordvalidation && 
                    confirmPas.classList.contains("isValidate") && 
                    countriesValidation;
    
    
    // Habilitamos o deshabilitamos el botón según las validaciones
    btn.disabled = !todo;
    
    // Cambiamos el estilo del botón según si está habilitado o no
    if (todo) {
        btn.style.backgroundColor = "#235396";
        btn.style.color ="#f0fdf4"
        btn.style.cursor = "pointer";
        
        
    } else {
        btn.style.backgroundColor = "#cccccc";
       
    }
}
  
 