
    function formValidation() {
        const name = document.getElementById("input_name").value;
        const surname = document.getElementById("input_surname").value;
        const birthdate = document.getElementById("input_birthdate").value;
        const email = document.getElementById("input_email").value;
        const password = document.getElementById("input_password").value;

        let mistakes = [];

        if (name === "") {
            mistakes.push("Introduzca su nombre.");
        }

        if (surname === "") {
            mistakes.push("Introduzca su apellido.")
        }

        if (birthdate === "") {
            mistakes.push("Introduzca su fecha de nacimiento.");
        }

        if (email === "") {
            mistakes.push("Introduzca su correo electrónico.")
        } else {
            let expressionEmail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!expressionEmail.test(email)) {
                mistakes.push("Introduzca un correo válido.")
            }
        }

        if (password === "") {
            mistakes.push("Introduzca su contraseña.")
        } else {
            let expressionPassword = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!expressionPassword.test(password)) {
                mistakes.push("Introduzca una contraseña válida. Debe tener minúsculas, mayusculas y mínimo 8 caracteres.")
            }
        }

        if (mistakes.length > 0) {
            showMistakes(mistakes);
            return false;
        }

        return true;

    }


    function showMistakes(mistakes) {
        let divMistakes = document.getElementById("mistakes");
        divMistakes.innerHTML = "";
        divMistakes.style.display = "block";

        let ul = document.createElement("ul");
        mistakes.forEach(function (mistake) {
            let li = document.createElement("li");
            li.textContent = mistake;
            ul.appendChild(li);
        });
        divMistakes.appendChild(ul);
    }

    
const reset = document.getElementById("reset_button");

reset.addEventListener("click", () => {
    let divMistakes = document.getElementById("mistakes");
    divMistakes.innerHTML = "";
})