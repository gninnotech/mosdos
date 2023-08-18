<?php
try {
    $deviceownerOptions = $pdo->prepare("SELECT * FROM device_owner_form");
    $deviceownerOptions->execute();

    while ($deviceowner_Options = $deviceownerOptions->fetch(PDO::FETCH_ASSOC)) {
     
            echo '<option value="' . $deviceowner_Options["deviceOwner"] . '">' . $deviceowner_Options["deviceOwner"] . '</option>';
        
         
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
