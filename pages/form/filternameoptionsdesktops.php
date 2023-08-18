<?php
try {
    $filter_name_options = $pdo->prepare("SELECT DISTINCT filterName FROM filter_name_form WHERE deviceType = 'Home Desktop' || deviceType = 'Home Laptop' || deviceType = 'Office Desktop' || deviceType = 'Office Laptop'");
    $filter_name_options->execute();
    
    while ($filternameoptions = $filter_name_options->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $filternameoptions["filterName"] . '">' . $filternameoptions["filterName"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
