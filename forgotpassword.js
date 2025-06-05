const auth = firebase.auth();

document.querySelector(".sendresetlink").addEventListener("click", () => {
  const email = document.querySelector("#email").value.trim();

  if (!email) {
    alert("Please enter your registered email.");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email!");
      window.location.href = "login.html"; // Optional
    })
    .catch((error) => {
      alert(error.message);
    });
});

