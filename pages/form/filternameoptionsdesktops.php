<?php
try {
    $filter_name_options = $pdo->prepare("SELECT * FROM filter_name_options WHERE deviceType = 'Desktop & Laptop'");
    $filter_name_options->execute();
    
    while ($filternameoptions = $filter_name_options->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $filternameoptions["filterNameDetails"] . '">' . $filternameoptions["filterNameDetails"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
