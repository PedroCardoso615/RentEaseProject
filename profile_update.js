document.addEventListener('DOMContentLoaded', function () {
    const profileform = document.getElementById('profile-form');

    document.getElementById("firstname").value = localStorage.getItem("firstname") || "";
    document.getElementById("lastname").value = localStorage.getItem("lastname") || "";
    document.getElementById("birthdate").value = localStorage.getItem("birthdate") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("password").value = localStorage.getItem("password") || "";

});

function profileupdate() {
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("birthdate");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("flats");
    localStorage.removeItem("favourites");

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("birthdate", birthdate);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert('Profile updated successfully!');
};