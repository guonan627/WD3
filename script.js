var checker = document.getElementById("checkit");
var submitBtn = document.getElementById("submitme");
checker.addEventListener("change", function () {
  if (this.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

function validateGender() {
  var genderRadios = document.querySelectorAll('[name="gender"]');
  var error = document.querySelector("#errorgender");
  var isValid = false;
  for (var i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      isValid = true;
    }
  }
  if (!isValid) {
    error.style.display = "block";
    error.innerHTML = "Gender is required";
  } else {
    error.innerHTML = "";
  }
}

// function passEquality() {
//   if (psw1.value.length > 0 && psw2.value.length > 0) {
//     if (psw1.value === psw2.value) {
//       psw1.setCustomValidity("");
//       psw2.setCustomValidity("");
//       errorpsw1.innerHTML = "";
//       errorpsw2.innerHTML = "";
//       return true;
//     } else {
//       psw1.setCustomValidity("brrr");
//       psw2.setCustomValidity("brrr");
//       errorpsw1.innerHTML = "brrrr, please fix password errors!";
//       errorpsw2.innerHTML = "brrrr, please fix password errors!";
//       return false;
//     }
//   }
// }

function revealPasswords() {
  if (psw1.getAttribute("type") === "text") {
    /// what is this if statement here?
    psw1.setAttribute("type", "password");
    psw2.setAttribute("type", "password");
    eye.setAttribute("class", "fas fa-eye-slash");
  } else {
    psw1.setAttribute("type", "text");
    psw2.setAttribute("type", "text");
    eye.setAttribute("class", "fas fa-eye");
  }
}

function validateForm() {
  // surname
  var sn = document.getElementById("sn");
  var errorsn = document.getElementById("errorsn");
  if (!sn.checkValidity()) {
    errorsn.style.display = "block";
  } else {
    errorsn.style.display = "none";
  }
  // another method eg.----first name
  // var fn = document.getElementById("fn");
  // var errorfn = document.getElementById("errorfn");
  // if (!fn.checkValidity()) {
  //   errorfn.innerHTML = "Please input a valid First Name";
  // }
  // css----.error remove display：none

  // first name
  var fn = document.getElementById("fn");
  var errorfn = document.getElementById("errorfn");
  if (!fn.checkValidity()) {
    errorfn.style.display = "block";
  } else {
    errorfn.style.display = "none";
  }
  // gender
  validateGender();
  //Title
  var tt = document.getElementById("tt");
  var errortt = document.getElementById("errortt");
  if (!tt.checkValidity()) {
    errortt.style.display = "block";
  } else {
    errortt.style.display = "none";
  }
  // Date of Birth
  var dob = document.getElementById("dob");
  var errordob = document.getElementById("errordob");
  if (!dob.checkValidity()) {
    errordob.style.display = "block";
  } else {
    errordob.style.display = "none";
  }
  // Email
  var em = document.getElementById("em");
  var errorem = document.getElementById("errorem");
  if (!em.checkValidity()) {
    errorem.style.display = "block";
  } else {
    errorem.style.display = "none";
  }
  // Password
  var psw1 = document.getElementById("psw1");
  var errorpsw1 = document.getElementById("errorpsw1");
  if (!psw1.checkValidity()) {
    errorpsw1.style.display = "block";
  }
  // if (passEquality() === false) {
  //   errorpsw1.innerHTML = "passwords do not match!";
  // }
  else {
    errorpsw1.style.display = "none";
  }
  // Password Again
  var psw2 = document.getElementById("psw2");
  var errorpsw2 = document.getElementById("errorpsw2");
  if (!psw2.checkValidity()) {
    errorpsw2.style.display = "block";
  }
  // if (passEquality() === false) {
  //   errorpsw2.innerHTML = "passwords do not match!";
  // }
  else {
    errorpsw2.style.display = "none";
  }
  // Address
  var ad = document.getElementById("ad");
  var errorad = document.getElementById("errorad");
  if (!ad.checkValidity()) {
    errorad.style.display = "block";
  } else {
    errorad.style.display = "none";
  }
  // Suburb
  var sb = document.getElementById("sb");
  var errorsb = document.getElementById("errorsb");
  if (!sb.checkValidity()) {
    errorsb.style.display = "block";
  } else {
    errorsb.style.display = "none";
  }
  // State
  var st = document.getElementById("st");
  var errorst = document.getElementById("errorst");
  if (!st.checkValidity()) {
    errorst.style.display = "block";
  } else {
    errorst.style.display = "none";
  }
  // Postcode
  var pc = document.getElementById("pc");
  var errorpc = document.getElementById("errorpc");
  if (!pc.checkValidity()) {
    errorpc.style.display = "block";
  } else {
    errorpc.style.display = "none";
  }
  // Phone after hours
  var p1 = document.getElementById("p1");
  var errorp1 = document.getElementById("errorp1");
  if (!p1.checkValidity()) {
    errorp1.style.display = "block";
  } else {
    errorp1.style.display = "none";
  }
  // Phone in business hours
  var p2 = document.getElementById("p2");
  var errorp2 = document.getElementById("errorp2");
  if (!p2.checkValidity()) {
    errorp2.style.display = "block";
  } else {
    errorp2.style.display = "none";
  }
}
