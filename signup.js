document.querySelector(".signup-btn").addEventListener("click", function () {
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!email || !password || !confirmPassword) {
    alert("Please fill in all required fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (fullName) {
        return user.updateProfile({ displayName: fullName });
      }
      return user;
    })
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

document.querySelector(".Google-signup").addEventListener("click", function () {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert("Welcome, " + user.displayName + "! You've signed up with Google.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Google Sign-Up Failed: " + error.message);
    });
});


