<?php
try {
    $filter_name_optionsandroid = $pdo->prepare("SELECT * FROM filter_name_options WHERE deviceType = 'android'");
    $filter_name_optionsandroid->execute();

    while ($filternameoptionsandroid = $filter_name_optionsandroid->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $filternameoptionsandroid["filterNameDetails"] . '">' . $filternameoptionsandroid["filterNameDetails"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
