document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Demo credentials
    if(email === "rameshamale26@gmail.com" && password === "Amale@123"){
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
