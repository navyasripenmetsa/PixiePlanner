const auth = firebase.auth();
document.querySelector(".login-btn").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Google Login
document.querySelector(".Google-Login").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      alert("Google Login Success");
      window.location.href = "index.html";
    })
    .catch((error) => alert(error.message));
});
