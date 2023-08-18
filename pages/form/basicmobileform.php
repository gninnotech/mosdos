<?php
include '../../database/dbConnection.php';
$mtype = $_REQUEST["mtype"];
$kehilla = $_REQUEST["kehilla"];

//tag
$tagstmts = $pdo->prepare("SELECT * FROM tag_form WHERE mobileDetails = '" . $mtype . "'");
$tagstmts->execute();
$tagarrayform = array();
while ($tagOptions = $tagstmts->fetch(PDO::FETCH_ASSOC)) {
    if(!empty($tagOptions["tagOptions"])){
        $tagoptioncontent = ''; 
        if($tagOptions["tagOptions"] == 'Yes/No'){
            $tagoptioncontent = '<option selected="" class="hidden" value="">' . $tagOptions['tagOptions'] . '</option>';
        }else{
            $tagoptioncontent = '<option value="' . $tagOptions['tagOptions'] . '">' . $tagOptions['tagOptions'] . '</option>';
        }
    }
    if(!empty($tagoptioncontent)){
    array_push($tagarrayform, $tagoptioncontent);
    }
}
$tagarrayValue = implode($tagarrayform);
$tagstmtss = $pdo->prepare("SELECT * FROM tag_form WHERE mobileDetails = '" . $mtype . "'");
$tagstmtss->execute();
$taglabel = $tagstmtss->fetch(PDO::FETCH_ASSOC);
if(!empty($taglabel["tagLabel"])){
    $taglabelcontent = '<input class="form-control mt-2  btn btn-secondary w-50 Taglabel" type="text" value="'. $taglabel["tagLabel"].'">';
    $tagselect = '<select class="form-select mt-2  text-center tagDetails" name="tagDetails[]">'. $tagarrayValue.'</select>';
    $TagContainerValue = $taglabelcontent.''.$tagselect;
}else{
    $TagContainerValue = 'Not Applicable';
}

//sticker
$stickerstmts = $pdo->prepare("SELECT * FROM sticker_form WHERE mobileDetails = '" . $mtype . "' && moisedList = '" . $kehilla . "'");
$stickerstmts->execute();
$stickerarrayform = array();
while ($stickerOptions = $stickerstmts->fetch(PDO::FETCH_ASSOC)) {
    if (!empty($stickerOptions["stickerOptions"])) {
        $stickeroptioncontent = '';
        if ($stickerOptions["stickerOptions"] == 'SELECT') {
            $stickeroptioncontent = '<option selected="" class="hidden" value="">' . $stickerOptions['stickerOptions'] . '</option>';
        } else {
            $stickeroptioncontent = '<option value="' . $stickerOptions['stickerOptions'] . '">' . $stickerOptions['stickerOptions'] . '</option>';
        }
    }
    if (!empty($stickeroptioncontent)) {
        array_push($stickerarrayform, $stickeroptioncontent);
    }
}
$stickerarrayValue = implode($stickerarrayform);
$stickerstmtss = $pdo->prepare("SELECT * FROM sticker_form WHERE mobileDetails = '" . $mtype . "' && moisedList = '" . $kehilla . "'");
$stickerstmtss->execute();
$stickerlabel = $stickerstmtss->fetch(PDO::FETCH_ASSOC);
if (!empty($stickerlabel["stickerLabel"])) {
    $stickerlabelcontent = '<input class="form-control mt-2  btn btn-secondary w-50 stickerlabel" type="text" value="' . $stickerlabel["stickerLabel"] . '">';
    $stickerselect = '<select class="form-select mt-2  text-center stickerType" name="stickerType[]">'. $stickerarrayValue . '</select>';
    $stickerContainerValue = $stickerlabelcontent . $stickerselect;
} else {
    $stickerContainerValue = 'Not Applicable';
}

//imei

$imeistmts = $pdo->prepare("SELECT * FROM imei_form WHERE mobileDetails = '" . $mtype . "'");
$imeistmts->execute();
$imeiinput = $imeistmts->fetch(PDO::FETCH_ASSOC);
if(!empty($imeiinput["imeiPlaceHolder"])){
    $ImeiContainerValue = '<input class="form-control mt-2  imeiNumber" type="text" name="imeiNumber[]" placeholder="'. $imeiinput["imeiPlaceHolder"].'" pattern="[0-9]{15,16}">';
}else{
    $ImeiContainerValue = 'Not Applicable';
}

//text
$textstmts = $pdo->prepare("SELECT * FROM text_capability_form WHERE mobileDetails = '" . $mtype . "'");
$textstmts->execute();
$textarrayform = array();
while ($textCapabilityOptions = $textstmts->fetch(PDO::FETCH_ASSOC)) {
    $textoptioncontent = '';
    if (!empty($textCapabilityOptions["textCapabilityOptions"])) {
        if ($textCapabilityOptions["textCapabilityOptions"] == 'Yes/No') {
            $textoptioncontent = '<option selected="" class="hidden" value="">' . $textCapabilityOptions['textCapabilityOptions'] . '</option>';
        } else {
            $textoptioncontent = '<option value="' . $textCapabilityOptions['textCapabilityOptions'] . '">' . $textCapabilityOptions['textCapabilityOptions'] . '</option>';
        }
    }
    if (!empty($textoptioncontent)) {
        array_push($textarrayform, $textoptioncontent);
    }
}
$textarrayValue = implode($textarrayform);
$textstmtss = $pdo->prepare("SELECT * FROM text_capability_form WHERE mobileDetails = '" . $mtype . "'");
$textstmtss->execute();
$textCapabilityLabel = $textstmtss->fetch(PDO::FETCH_ASSOC);
if (!empty($textCapabilityLabel["textCapabilityLabel"])) {
    $textCapabilityLabelcontent = '<input class="form-control mt-2 btn btn-secondary w-50 textCapabilityLabel" type="text" value="' . $textCapabilityLabel["textCapabilityLabel"] . '">';
    $textselect = '<select class="form-select  mt-2 text-center textCapabilities" name="textCapabilities[]">' . $textarrayValue . '</select>';
    $TextContainerValue = $textCapabilityLabelcontent . $textselect;
} else {
    $TextContainerValue = 'Not Applicable';
}

$response = array('TagContainerValue' => $TagContainerValue, 'stickerContainerValue' => $stickerContainerValue, 'ImeiContainerValue' => $ImeiContainerValue, 'TextContainerValue' => $TextContainerValue);

echo json_encode($response);