"use strict";

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("/")) {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const btnSignIn = document.querySelector(".sign-in-button");

    btnSignIn.addEventListener("click", () => {
      //verify at least one number in password
      const passwordArr = password.value
        .split("")
        .map((l) => (!isNaN(l) ? true : false))
        .filter((l) => l === true);
      console.log(passwordArr);

      // Verify correct email format
      if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.querySelector(".email-condition").classList.remove("hide");
      } else {
        document.querySelector(".email-condition").classList.add("hide");
      }

      // Password conditions
      if (passwordArr.length === 0 && password.value.length < 8) {
        document.querySelector(".one-number-span").style.color = "#dc2f02";
        document.querySelector(".eight-characters-span").style.color =
          "#dc2f02";
      } else if (passwordArr.length === 0) {
        document.querySelector(".one-number-span").style.color = "#dc2f02";
      } else if (password.value.length < 8) {
        document.querySelector(".eight-characters-span").style.color =
          "#dc2f02";
      } else {
        window.location.href = "camera.html";
      }

      password.addEventListener("keypress", () => {
        document.querySelector(".one-number-span").style.color = "#fff";
        document.querySelector(".eight-characters-span").style.color = "#fff";
      });
    });
  } else if (window.location.pathname.endsWith("html/camera.html")) {
    const flash = document.querySelector(".camera-flash");
    const body = document.querySelector("body");
    // camera flash
    flash.addEventListener("click", () => {
      console.log(flash);
      body.style.background = "linear-gradient(#ffe14e,rgb(255, 212, 42))";
    });
  }
});
