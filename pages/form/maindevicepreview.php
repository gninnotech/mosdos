<?php
$maindevstmts = $pdo->prepare("SELECT * FROM main_devices WHERE application_id = '" . $applicationForm["application_id"] . "'");
$maindevstmts->execute();
while ($maindevices = $maindevstmts->fetch(PDO::FETCH_ASSOC)) {
?>
    <div class="col-md-12">
        <p class="bg-secondary"><span class="text-light">
                <?= htmlspecialchars($maindevices["deviceOwner"]) ?>:
            </span>
            <?= htmlspecialchars($maindevices["deviceType"]) ?>
        </p>

        <?php
        $filterstmts = $pdo->prepare("SELECT * FROM filter_settings WHERE mainDevice_id = '" . $maindevices["mainDevice_id"] . "'");
        $filterstmts->execute();
        $filterSettings = $filterstmts->fetch(PDO::FETCH_ASSOC);
        if (isset($filterSettings["filterConfig_id"])) {
        ?>
            <p><span class="text-secondary">Filter Type: </span>
                <?php echo $filterSettings["filterName"] ?>
                <?php echo $filterSettings["filterType"] ?>
                <?php echo $filterSettings["otherFilter"] ?>
            </p>
        <?php } ?>

        <?php if (isset($filterSettings["filterEmail"])) { ?>
            <p class="bg-secondary"><span class="text-light">Filter Information: </span>
                <?= htmlspecialchars($filterSettings["filterEmail"]) ?>
                <?= htmlspecialchars($filterSettings["filterPolicy"]) ?>
            </p>
        <?php } ?>

        <?php
    $whatstmts = $pdo->prepare("SELECT * FROM whatsapp_settings WHERE mainDevice_id = '" . $maindevices["mainDevice_id"] . "'");
        $whatstmts->execute();
    $whatsAppSettings = $whatstmts->fetch(PDO::FETCH_ASSOC);
        if (isset($whatsAppSettings["whatsappDetail"])) { ?>
            <p><span class="text-secondary">Other information:</span>
                <?= htmlspecialchars($whatsAppSettings["whatsappDetail"]) ?>
                 
            </p>
        <?php } ?>
    </div>
    <hr>
<?php
}
?>