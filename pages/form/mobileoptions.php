<?php
try {
    $mobileoptions = $pdo->prepare("SELECT * FROM mobile_form");
    $mobileoptions->execute();
    
    while ($mobile_options = $mobileoptions->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $mobile_options["mobileDetails"] . '">' . $mobile_options["mobileDetails"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
