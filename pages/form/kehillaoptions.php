<?php
try {
    $kehillaoptions = $pdo->prepare("SELECT * FROM community_form");
    $kehillaoptions->execute();
    
    while ($kehilla_options = $kehillaoptions->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $kehilla_options["moisedList"] . '">' . $kehilla_options["moisedList"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
?>
