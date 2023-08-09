<?php
if(!isset($_SESSION["id_admin"]) && empty($_SESSION["id_admin"])){
    session_destroy();
header("Location: ../index.html");
exit;
}
?>