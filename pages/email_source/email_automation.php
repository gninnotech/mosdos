<?php
include '../../database/dbConnection.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../assets/PHPMailer-master/src/Exception.php';
require '../../assets/PHPMailer-master/src/PHPMailer.php';
require '../../assets/PHPMailer-master/src/SMTP.php';

if (isset($_GET["application_id"])) {
    $application_id = $_GET["application_id"];
    $tagNotificationArray = array();
    $tag_notif = $pdo->prepare("SELECT * FROM tag_notification WHERE application_id = ?");
    $tag_notif->execute([$application_id]);
    while ($tag_notification = $tag_notif->fetch(PDO::FETCH_ASSOC)) {
        if (isset($tag_notification["notification"]) && !empty($tag_notification["notification"])) {
            $tagNotificationPush = '<p>' . $tag_notification["notification"] . '</p>';
            array_push($tagNotificationArray, $tagNotificationPush);
        }
    }
    global $tagGlobal;
    $tagGlobal = $tagNotificationArray;
    $tagGlobalValue = implode('', $tagGlobal);

    $stickerNotificationArray = array();
    $sticker_notif = $pdo->prepare("SELECT * FROM sticker_notification WHERE application_id = ?");
    $sticker_notif->execute([$application_id]);
    while ($sticker_notification = $sticker_notif->fetch(PDO::FETCH_ASSOC)) {
        if (isset($sticker_notification["notification"]) && !empty($sticker_notification["notification"])) {
            $stickerNotificationPush = '<p>' . $sticker_notification["notification"] . '</p><hr>';
            array_push($stickerNotificationArray, $stickerNotificationPush);
        }
    }
    global $stickerGlobal;
    $stickerGlobal = $stickerNotificationArray;
    $stickerGlobalValue = implode('', $stickerGlobal);


    $Body = '
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mosdostechnologyoffice</title>
        <style>
            html,body,h1,h2,h3,h4,h5 {
                font-family: "Open Sans", sans-serif
            }
            .hidden {
                display: none;
            }
            .striped-table-gray {
                background-color: #f2f2f2;
            }
            .striped-tables-white {
                background-color: white;
            }
            .row {
                display: flex;
                max-width: 600px;
                width: 600px;
            }
            .column {
                flex: 50%;
                max-width: 600px;
                width: 600px;
            }
            table {
                max-width: 600px;
                width: 600px;
                object-fit: cover;
            }
            .superflo {
                width: 600px;
                overflow-x: auto;
            }
        </style>
    </head>
    <body style="width:600px;">
        <p style="text-align:center;color: rgb(0, 143, 219);font-size:35px;">Mosdos Technology Office</p>
        <p style="font-size:24px;text-align:center"> Ishur Application</p>
        <hr>
        <div class="superflo">
            ' . $tagGlobalValue . ' 
            ' . $stickerGlobalValue . '
        </div>
        <p>Tel: 0 33 33 44 66 18</p>
        <p>18b Linthorpe Road</p>
        <p>Office Hours:</p>
        <p>Sun-Thurs:</p>
        <p>10:00 am - 2:00 pm</p>
        <p>4:00 pm - 6:00 pm</p>
        <div style="background-color:gray;color:white;text-align:center;padding-top:20px;padding-bottom:20px"">
        <p class=" text-center mt-3" style="font-size:10px">Copyrights © 2023 powered by Lastdrop.co</p>
        </div>
    </body>
    </html>
    ';

    echo $Body;
    include 'email_credentials.php';
    // $mail = new PHPMailer(true);
    // try {
    //     $mail->IsSMTP();
    //     $mail->isHTML(true);
    //     $mail->SMTPDebug = 0;
    //     $mail->SMTPAuth = true;
    //     $mail->SMTPSecure = "ssl";
    //     $mail->Host = "smtp.gmail.com";
    //     $mail->Port = 465;
    //     $mail->AddAddress($customerEmail);
    //     $mail->Username = $serverEmail;
    //     $mail->Password = $serverPassword;
    //     $mail->SetFrom($serverEmail);
    //     $mail->AddReplyTo($serverEmail, "Nathan");
    //     $mail->Subject = 'Ishur Application Update';
    //     $mail->Body = $Body;
    //     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    //     $mail->Send();
    // } catch (Exception $ex) {
    // }
}
