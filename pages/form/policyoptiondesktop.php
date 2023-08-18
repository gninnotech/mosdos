<?php
try {
    $kehila_policy_options = $pdo->prepare("SELECT DISTINCT filterPolicy FROM filter_policy_form WHERE deviceType = 'Home Desktop' || deviceType = 'Home Laptop' || deviceType = 'Office Desktop' || deviceType = 'Office Laptop'");
    $kehila_policy_options->execute();
    
    while ($kehilapolicyoptions = $kehila_policy_options->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $kehilapolicyoptions["filterPolicy"] . '">' . $kehilapolicyoptions["filterPolicy"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
