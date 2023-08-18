<?php
try {
    $whatsappDetailOptions = $pdo->prepare("SELECT DISTINCT * FROM whatsapp_detail_form WHERE whatsappDetail != '' && whatsappDetail IS NOT NULL");
    $whatsappDetailOptions->execute();

    while ($whatsappDetail_Options = $whatsappDetailOptions->fetch(PDO::FETCH_ASSOC)) {
        echo '<option value="' . $whatsappDetail_Options["whatsappDetail"] . '">' . $whatsappDetail_Options["whatsappDetail"] . '</option>';
    }
} catch (PDOException $e) {
    // Handle the error (display, log, etc.)
    echo "Error: " . $e->getMessage();
}
