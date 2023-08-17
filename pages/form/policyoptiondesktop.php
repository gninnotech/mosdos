<?php
try {
    $kehila_policy_options = $pdo->prepare("SELECT * FROM kehila_policy_options WHERE kehillaOptionDevice = 'Desktop & Laptop'");
    $kehila_policy_options->execute();
    
    while ($kehilapolicyoptions = $kehila_policy_options->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $kehilapolicyoptions["kehillaPolicyDetails"] . '">' . $kehilapolicyoptions["kehillaPolicyDetails"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
