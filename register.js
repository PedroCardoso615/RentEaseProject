function saveRegister() {
  let firstname, lastname, birthdate, email, password;

  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  birthdate = document.getElementById("birthdate").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (firstname.length < 2 || lastname.length < 2) {
    alert("First and Last names must be at least 2 characters long.");
    return false;
  }

  let birthdateInput = new Date(birthdate);
  let today = new Date();
  let age = today.getFullYear() - birthdateInput.getFullYear();
  let monthDiff = today.getMonth() - birthdateInput.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateInput.getDate())) {
    age--;
  }
  
  if (age < 18 || age > 120) {
    alert("Age must be between 18 and 120.");
    return false;
  }

  let passwordValidate = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;
  if (!passwordValidate.test(password)) {
    alert("Password must be at least 6 characters long, include letters, numbers, and a special character.");
    return false;
  }
  const register_data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

  if (register_data.some((i) => i.email == email))  //Verifica se há um user no localstorage com o mesmo email percorrendo a array
                                                    //Caso haja um user com o mesmo email mostra o alerta. 
  {
    alert("This email is already in use");
  }
  else {
    window.location.href = "./login.html";
    register_data.push({
      firstname,
      lastname,
      birthdate,
      email,
      password
    })

    alert("Successful Registration");
    localStorage.setItem("users", JSON.stringify(register_data));
  }
}
