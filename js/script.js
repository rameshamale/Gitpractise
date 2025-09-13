document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Demo credentials
    if(email === "user@test.com" && password === "1234"){
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
