<?php
include '../../database/dbConnection.php';
$sk = $_REQUEST["sk"];
$kehillaidoption = '';
if ($sk == 'Ezreini Stamford Hill') {
    $kehillaidoption = 1;
} else if ($sk == 'Mivtzar') {
    $kehillaidoption = 2;
} else if ($sk == 'Gur') {
    $kehillaidoption = 3;
} else if ($sk == 'Beis Chinuch') {
    $kehillaidoption = 4;
} else if ($sk == 'Venishmartem (Belz 99)') {
    $kehillaidoption = 5;
} else if ($sk == 'Skver') {
    $kehillaidoption = 6;
} else if ($sk == 'Westcliff') {
    $kehillaidoption = 7;
} else if ($sk == 'Ezreini Manchester') {
    $kehillaidoption = 8;
} else if ($sk == 'Mishmeres-Satmar') {
    $kehillaidoption = 9;
} else {
}
$institutionstmtops = $pdo->prepare("SELECT * FROM institution_form WHERE moisedList = '" . $sk . "'");
$institutionstmtops->execute();
$institutionarray = array();
while ($institution_options = $institutionstmtops->fetch(PDO::FETCH_ASSOC)) {
    $institutioncontent = '<div class="col-md-4 ms-3 form-check d-flex justify-content-end">
        <input name="institutions[]" value="' . $institution_options['institutionDetails'] . '"  class="form-check-input me-1 nnone" type="checkbox" required onchange="checkboxinspect()">
        <label class="form-check-label">' . $institution_options['institutionDetails'] . '</label>
    </div>';
    array_push($institutionarray, $institutioncontent);
}
array_push($institutionarray);
$institutionses = implode($institutionarray);

$synagogarray = array();
$synagogstmtops = $pdo->prepare("SELECT * FROM synagogue_form WHERE moisedList = '" . $sk . "'");
$synagogstmtops->execute();
$synagoglabel = $synagogstmtops->fetch(PDO::FETCH_ASSOC);
$label = $synagoglabel["synagogueHeader"];
$otherselectprimary = '<option value="">Select</option>';
array_push($synagogarray, $otherselectprimary);
while ($synagogoptions = $synagogstmtops->fetch(PDO::FETCH_ASSOC)) {
    $synagogcontent = '<option value="' . $synagogoptions["synagogueDetails"] . '">' . $synagogoptions["synagogueDetails"] . '</option>';

    array_push($synagogarray, $synagogcontent);
}
$otherselect = '<option value="Other">Other</option>';
array_push($synagogarray, $otherselect);
$synagogues = implode($synagogarray);
$response = array('institution' => $institutionses, 'synagoglabel' => $label, 'synagogueoption' => $synagogues);

// Encode the PHP array as JSON before echoing
echo json_encode($response);
