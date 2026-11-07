const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach((pregunta) => {

    pregunta.addEventListener("click", () => {

        const panel = pregunta.nextElementSibling;
        const elemento = pregunta.parentElement;

        // Cerrar las demás preguntas
        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== elemento) {

                item.classList.remove("activo");

                item.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        // Abrir o cerrar la pregunta seleccionada
        elemento.classList.toggle("activo");

        if (elemento.classList.contains("activo")) {

            panel.style.maxHeight = panel.scrollHeight + "px";

        } else {

            panel.style.maxHeight = null;

        }

    });

});

console.log("JavaScript conectado correctamente");