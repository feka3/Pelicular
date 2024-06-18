function showFieldsGenre() {
    const cantidad = parseInt(document.getElementById("inputStateGenre").value);
    const camposDiv = document.getElementById("genreFields");
    camposDiv.classList.add("mt-4")
    camposDiv.innerHTML = ""; // Limpiar los campos anteriores

    for (var i = 0; i < cantidad; i++) {
        const input = document.createElement("input");
        const div = document.createElement("div");
        input.type = "text";
        input.name = "genero_" + (i + 1);
        input.placeholder = "Género " + (i + 1);
        camposDiv.appendChild(div);
        div.appendChild(input);
        div.classList.add(`col-md-9`);
        input.classList.add("form-control")
        input.setAttribute("required", "true");
    }
}