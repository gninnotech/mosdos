<?php
                    $mtotaskstmt = $pdo->prepare("SELECT * FROM mto_task");
                    $mtotaskstmt->execute();
                    $mtotask = $mtotaskstmt->fetchAll(); 
                    $mtotaskCount = $mtotaskstmt->rowCount();
                    
                    $verifiertaskstmt = $pdo->prepare("SELECT * FROM verifier_task");
                    $verifiertaskstmt->execute();
                    $verifiertask = $verifiertaskstmt->fetchAll();
                    $verifiertaskCount = $verifiertaskstmt->rowCount();

                    $admintaskstmt = $pdo->prepare("SELECT * FROM admin_task");
                    $admintaskstmt->execute();
                    $admintask = $admintaskstmt->fetchAll();
                    $admintaskCount = $admintaskstmt->rowCount();
?>