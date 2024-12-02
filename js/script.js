const users = JSON.parse(localStorage.getItem("users")) || [];

// Registration
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (users.find(user => user.email === email)) {
    alert("This email is already registered.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please log in.");
  window.location.href = "index.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const user = users.find(user => user.email === email);

  if (!user) {
    alert("User not found. Please register.");
    return;
  }

  if (user.password !== password) {
    alert("Incorrect password.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  window.location.href = "home.html";
});