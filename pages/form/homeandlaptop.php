<?php
try {
    $devicetypeOptions = $pdo->prepare("SELECT DISTINCT * FROM device_type_form WHERE deviceCategory = 'Home and Office'");
    $devicetypeOptions->execute();

    while ($devicetype_Options = $devicetypeOptions->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $devicetype_Options["deviceType"] . '">' . $devicetype_Options["deviceType"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
