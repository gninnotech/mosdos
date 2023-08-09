<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include '../database/dbConnection.php';
    $username = htmlspecialchars($_POST["username"]);
    $password = htmlspecialchars($_POST["password"]);

    $adminstmt = $pdo->prepare("SELECT * FROM admin WHERE adminUsername = ?");
    $adminstmt->execute([$username]);
    $admin = $adminstmt->fetch();

    $userstmt = $pdo->prepare("SELECT * FROM accounts WHERE userName = ?");
    $userstmt->execute([$username]);
    $users = $userstmt->fetch();

    if(isset($admin) && !empty($admin) && !isset($users) && empty($users)){
        if (password_verify($password, $admin["adminPassword"])) {
            session_start();
            session_regenerate_id();
            $_SESSION["id_admin"] = $admin["id_admin"];
            $success = 'success';
            $destination = 'admin/home.html';
        } else {
            $success = 'fail';
            $destination = 'Username or Password is not valid';
        }
        $response = array('status' => $success, 'destination' => $destination);
        echo json_encode($response);
    } else if (!isset($admin) && empty($admin) && isset($users) && !empty($users)){
        if (password_verify($password, $users["password"])) {
            session_start();
            session_regenerate_id();
            $_SESSION["user_id"] = $users["user_id"];
            $success = 'success';
            $destination = 'profile/home.html';
        } else {
            $success = 'fail';
            $destination = 'Username or Password is not valid';
        }
        $response = array('status' => $success, 'destination' => $destination);
        echo json_encode($response);
    }else{
        if (password_verify($password, $admin["adminPassword"])) {
            session_start();
            session_regenerate_id();
            $_SESSION["id_admin"] = $admin["id_admin"];
            $success = 'success';
            $destination = 'admin/home.html';
        } else {
            $success = 'fail';
            $destination = 'Username or Password is not valid';
        }
        $response = array('status' => $success, 'destination' => $destination);
        echo json_encode($response);
    }
} else {
    header('Location: index.html');
    exit;
}


