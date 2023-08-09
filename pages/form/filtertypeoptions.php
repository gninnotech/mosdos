<?php
try {
    $filter_type_options = $pdo->prepare("SELECT * FROM filter_type_options");
    $filter_type_options->execute();

    while ($filtertypeoptions = $filter_type_options->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $filtertypeoptions["filterTypeDetails"] . '">' . $filtertypeoptions["filterTypeDetails"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
