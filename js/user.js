// Verificar si la cookie ya existe
function checkCookie() {
  var username = getCookie("username");
  if (username !== "") {
    // Si la cookie existe, mostrar bienvenida
    showWelcomeMessage(username);
  } else {
    // Si la cookie no existe, mostrar el pop-up
    showPopup();
  }
}

// Obtener el valor de una cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Establecer una cookie con un nombre de usuario
function setCookie(cookieName, username, expirationDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + username + ";" + expires + ";path=/";
}

// Mostrar el pop-up
function showPopup() {
  var overlay = document.getElementById("overlay");
  var popup = document.querySelector(".popup");
  var usernameInput = document.getElementById("username-input");
  var submitBtn = document.getElementById("submit-btn");
  var content = document.getElementById("content");

  overlay.classList.remove("hidden");
  content.classList.add("hidden");

  submitBtn.addEventListener("click", function() {
    var username = usernameInput.value;
    if (username !== "") {
      // Establecer la cookie y mostrar bienvenida
      setCookie("username", username, 365);
      showWelcomeMessage(username);
      overlay.classList.add("hidden");
      content.classList.remove("hidden");
    }
  });
}

// Mostrar el mensaje de bienvenida
function showWelcomeMessage(username) {
  var welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.textContent = "¡Bienvenido, " + username + "!";
}

// Inicializar la verificación de la cookie al cargar la página
document.addEventListener("DOMContentLoaded", checkCookie);
