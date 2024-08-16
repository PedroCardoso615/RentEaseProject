document.addEventListener('DOMContentLoaded', function() {

    function stickHeader() {
        const headerHTML = `
            <header class="header">
                <nav class="nav-links">
                    <img src="RentEaseLogo.png" class="logo">
                    <a href="home.html" id="home-link">Home</a>
                    <a href="flats.html" id="flats-link">Flats</a>
                    <a href="profile_update.html" id="profile-link" class="hidden">Profile</a>
                    <a href="register.html" id="register-link" class="hidden">Register</a>
                    <a href="login.html" id="login-link" class="hidden">Login</a>
                    <a href="#" id="logout-link" class="hidden" onclick="logOut()">Logout</a>
                    <span id="hello-user" class="hidden">Hello, <span id="username"></span></span>
                </nav>
            </header>
        `;
        document.getElementById('header').innerHTML = headerHTML;
        UserLogin();
    }

    function UserLogin() {
        const logoutLink = document.getElementById('logout-link');
        const loginLink = document.getElementById('login-link');
        const registerLink = document.getElementById('register-link');
        const helloUser = document.getElementById('hello-user');
        const username = document.getElementById('username');
        const profileLink = document.getElementById('profile-link');

        const FirstName = localStorage.getItem('firstname');
        const LastName = localStorage.getItem('lastname');
        const isLoggedIn = FirstName && LastName; 

        if (isLoggedIn) {
            helloUser.classList.remove('hidden');
            logoutLink.classList.remove('hidden');
            username.textContent = `${FirstName} ${LastName}`;
            profileLink.classList.remove('hidden');
        } else {
            loginLink.classList.remove('hidden');
            registerLink.classList.remove('hidden');
        }
    }

    window.logOut = function() {
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        window.location.href = "./login.html";
    };

    stickHeader();
});