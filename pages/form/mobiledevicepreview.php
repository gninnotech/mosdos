<?php
$mobiledevstmts = $pdo->prepare("SELECT * FROM mobile_devices WHERE application_id = '" . $applicationForm["application_id"] . "'");
$mobiledevstmts->execute();
while ($mobileDevices = $mobiledevstmts->fetch(PDO::FETCH_ASSOC)) {
?>
    <div class="col-md-12">
        <p class="bg-secondary"><span class="text-light">
                <?= htmlspecialchars($mobileDevices["mobileUser"]) ?>:
            </span>
            <?= htmlspecialchars($mobileDevices["model"]) ?>
        </p>
        <?php
        $tagstmts = $pdo->prepare("SELECT * FROM tag_settings WHERE mobile_id = '" . $mobileDevices["mobile_id"] . "'");
        $tagstmts->execute();
        $tagSettings = $tagstmts->fetch(PDO::FETCH_ASSOC);
        if (isset($tagSettings["blockDetail"])) {
            if ($mobileDevices["model"] == 'Nokia 105') {
                $detail = 'Do you have version 2021 or later?';
            } else {
                $detail = 'Is it blocked by PuriFone/TAG?';
            }
        ?>
            <p><span class="text-secondary">
                    <?= htmlspecialchars($detail) ?>:
                </span>
                <?= htmlspecialchars($tagSettings["blockDetail"]) ?>
            </p>
        <?php } ?>

        <?php
        $imeitmts = $pdo->prepare("SELECT * FROM imei_settings WHERE mobile_id = '" . $mobileDevices["mobile_id"] . "'");
        $imeitmts->execute();
        $imeiSettings = $imeitmts->fetch(PDO::FETCH_ASSOC);
        if (isset($imeiSettings["imeiNumber"])) {
        ?>
            <p class="bg-secondary"><span class="text-light">IMEI: </span>
                <?= htmlspecialchars($imeiSettings["imeiNumber"]) ?>
            </p>
        <?php } ?>

        <?php
        $stickerstmts = $pdo->prepare("SELECT * FROM sticker_settings WHERE mobile_id = '" . $mobileDevices["mobile_id"] . "'");
        $stickerstmts->execute();
        $stickerSettings = $stickerstmts->fetch(PDO::FETCH_ASSOC);
        if (isset($stickerSettings["stickerDetail"])) {
            if ($mobileDevices["model"] == 'Qin' || $mobileDevices["model"] == 'LG') {
                $stickerdetail = 'Select the type of sticker your mobile have?';
            } else {
                $stickerdetail = 'Select the type of sticker your mobile have?';
            }
        ?>
            <p><span class="text-secondary">
                    <?= htmlspecialchars($stickerdetail) ?>:
                </span>
                <?= htmlspecialchars($stickerSettings["stickerDetail"]) ?>
            </p>
        <?php } ?>

        <?php if (isset($mobileDevices["textCapabilities"])) { ?>
            <p class="bg-secondary"><span class="text-light">Text Capability: </span>
                <?= htmlspecialchars($mobileDevices["textCapabilities"]) ?>
            </p>
        <?php } ?>
    </div>
    <hr>
<?php
}
?>