<?php
        $id_admin = $_SESSION["id_admin"];
        $adminstmt = $pdo->prepare("SELECT * FROM admin WHERE id_admin = ?");
        $adminstmt->execute([$id_admin]);
        $admin = $adminstmt->fetch();
?>