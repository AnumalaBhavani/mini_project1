let users = [];

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    users.push({name, email, password});
    document.getElementById("message").innerText = "Registered Successfully!";
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(u => u.email === email && u.password === password);

    if(user) {
        document.getElementById("message").innerText = "Login Successful!";
    } else {
        document.getElementById("message").innerText = "Invalid Credentials!";
    }
}