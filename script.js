// Creamos los selectores 1
let countries = document.querySelector("#countries");
let username = document.querySelector("#user"); // 1 crear el selector
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");
let phonecode = document.querySelector("#phone-code");
let passWord = document.querySelector("#password");
let confirmPas = document.querySelector("#confirm-password");

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







//validaciones paso 2


username.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
    validation(e, userRegex, username, info);
});

email.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
    validation(e, emailRegex, email, info);
});

countries.addEventListener("change", function () {
  codeNumber = this.value;
  phonecode.innerHTML = `+${codeNumber}`;
});

phoneNumber.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
  validation(e, phonenumberRegex, phoneNumber, info);
  console.log(e.target.parentElement);
});

passWord.addEventListener("input", (e) => {
    let info = e.target.parentElement.children[2];
  validation(e, passwordRegex, passWord, info);
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
});


