function userRegisterData() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    const user_data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[];
    if (user_data.some((i) => {
        return i.email == email && i.password == password
    })) {
        window.location.href = "./home.html";
        alert("Successful Login");
        const current_user = user_data.filter((i) => {       // Cria um novo array para armazenar as informações do utilizador
        return i.email == email && i.password == password  // Tais como, o email e password do user se forem válidos.
        })[0]
        
        localStorage.setItem("firstname", current_user.firstname);
        localStorage.setItem("lastname", current_user.lastname);
        localStorage.setItem("birthdate", current_user.birthdate);
        localStorage.setItem("email", current_user.email);
        localStorage.setItem("password", current_user.password);
    }
    else {
        alert("Email or Password are incorrect");
    }
}