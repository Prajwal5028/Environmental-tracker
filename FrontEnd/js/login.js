

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`Logged in with Email: ${email}`); // Display user login details
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        alert("Please fill in all fields."); // Display error if fields are empty
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});
