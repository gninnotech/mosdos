<?php
if(isset($_SESSION["user_id"])){
    $id_users = $_SESSION["user_id"];
    $id_usersstmt = $pdo->prepare("SELECT * FROM accounts WHERE user_id = ?");
    $id_usersstmt->execute([$id_users]);
    $users = $id_usersstmt->fetch(PDO::FETCH_ASSOC);

    $basicinformationstmts = $pdo->prepare("SELECT * FROM user_information WHERE user_id = ?");
    $basicinformationstmts->execute([$id_users]);
    $basic_information_forms = $basicinformationstmts->fetch(PDO::FETCH_ASSOC);

    $userName = $users["userName"];
    $basicinformationstmt = $pdo->prepare("SELECT * FROM customer_search WHERE registeredEmail = ?");
    $basicinformationstmt->execute([$userName]);
    $basic_information_form = $basicinformationstmt->fetch(PDO::FETCH_ASSOC);

}
       
?>