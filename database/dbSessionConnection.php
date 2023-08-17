<?php
session_start();
        $host = "localhost";
        $dbname = "mosdos";
        $username = "root";
        $password = "";
        try {
            $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }

ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
