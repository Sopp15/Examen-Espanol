<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $q1 = $_POST['q1'];
    $q2 = $_POST['q2'];
    $q3 = $_POST['q3'];
    $q4 = $_POST['q4'];
    $q5 = $_POST['q5'];

    // Guardar las respuestas en un archivo de texto
    $file = fopen("respuestas.txt", "a");
    if ($file) {
        fwrite($file, "Nombre: $nombre\nEmail: $email\nQ1: $q1\nQ2: $q2\nQ3: $q3\nQ4: $q4\nQ5: $q5\n\n");
        fclose($file);
        echo "Respuestas guardadas correctamente.";
    } else {
        echo "Error al abrir el archivo.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?> 