function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Correct username and password
  var website_username = "Aadarsh"; // Update to match the conditional check
  var website_password = "12345"; // Update to match the conditional check

  if (username === website_username && password === website_password) {
    alert("Login successful!"); // Alert for successful login
    window.location.href = "index.html"; // Redirect to home page
  } else {
    alert("Invalid username or password. Please try again."); // Alert for unsuccessful login
  }
}

function register() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Basic validation
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Here you can add logic to save the user's registration information
  // For demonstration, we just alert the user and redirect to the login page
  alert(`Registration successful! Welcome, ${username}!`);
  window.location.href = "login.html"; // Redirect to login page after registration
}

function forgotPassword() {
  var email = prompt("Please enter your registered email address:");

  // Simulated email check for demonstration
  if (email) {
    alert(`A password reset link has been sent to ${email}.`);
  } else {
    alert("Email address cannot be empty.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners to all "Add" buttons
  document.querySelectorAll(".btn-dark").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the details of the service from the card
      const card = event.target.closest(".card");
      const title = card.querySelector(".card-title").innerText;
      const price = card
        .querySelector(".card-text")
        .innerText.replace("Price: $", "");
      const imgSrc = card.querySelector(".card-img-top").src;

      // Create a service object
      const service = {
        title,
        price: parseFloat(price),
        imgSrc,
        quantity: 1,
      };

      // Store the service in local storage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingService = cart.find((item) => item.title === service.title);
      if (existingService) {
        existingService.quantity += 1; // Increment quantity if already in cart
      } else {
        cart.push(service); // Add new service to the cart
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${service.title} added to cart!`); // Alert that the service was added to cart
    });
  });
});
