<?php
try {
    $kehila_policy_optionsandroid = $pdo->prepare("SELECT * FROM kehila_policy_options WHERE kehillaPolicyDetails != 'Cannot be under kehilla policy (Mosdos Technology Office)'");
    $kehila_policy_optionsandroid->execute();

    while ($kehilapolicyoptionsandroid = $kehila_policy_optionsandroid->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $kehilapolicyoptionsandroid["kehillaPolicyDetails"] . '">' . $kehilapolicyoptionsandroid["kehillaPolicyDetails"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
