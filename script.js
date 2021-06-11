function getCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "test@test.com" && password == "test123") {
        swal("Logged In!", "Click OK to continue!", "success").then(function () {
            window.location.href = "music.html";
        });
    } else {
        swal("Error!", "Invalid Username or Password", "error");
    }
}