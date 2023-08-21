<?php
include '../../database/dbConnection.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../assets/PHPMailer-master/src/Exception.php';
require '../../assets/PHPMailer-master/src/PHPMailer.php';
require '../../assets/PHPMailer-master/src/SMTP.php';

if (isset($_GET["application_id"])) {
    $application_id = $_GET["application_id"];
    $selectApplication = $pdo->prepare("SELECT * FROM application_forms WHERE application_id = ?");
    $selectApplication->execute([$application_id]);
    $applicationForm = $selectApplication->fetch(PDO::FETCH_ASSOC);

    $header = '';
    if ($applicationForm["ishurPayment"] == 'Unpaid') {
        if ($applicationForm["ishurStatus"] == 'Action required') {
            $header = '<p>Your application for the ishur is presently pending due to an outstanding payment. We have conveniently retained the data you submitted. To facilitate the <a href="https://mosdos.co.uk/stripe/paymentstripe.php?mfid=' . $application_id . '">stripe</a> payment process, please reach out to our office at 03333446618 #2.</p>
                <p>Once the payment is completed, please note the following adjustments that need to be implemented to align with the stipulated regulations (takanos) outlined below. These changes must be addressed prior to receiving approval.</p>';
        } else {
            $header = '<p>Your ishur application is currently on hold due to the lack of payment. For your convinience we have saved the information you provided. To proceed with the <a href="https://mosdos.co.uk/stripe/paymentstripe.php?mfid=' . $application_id . '">stripe</a> payment contact our office at 03333446618 #2.</p>';
        }
    } else {
        if ($applicationForm["ishurStatus"] == 'Action required') {
            $header = '<p>I am writing to confirm receipt of your Ishur application. It is important to note that certain changes are required to be made to ensure compliance with the takanos that have been listed below, prior to granting approval.</p>';
        } else {
            $header = '<p>I hope this message finds you well. This is to confirm receipt of your Ishur application, and to inform you that it is presently under review. We will promptly notify you of the outcome once the review process has been completed.</p>';
        }
    }

    $user_id = $applicationForm["user_id"];
    $selectUserDetails = $pdo->prepare("SELECT * FROM user_information WHERE user_id = ?");
    $selectUserDetails->execute([$user_id]);
    $userInformation = $selectUserDetails->fetch(PDO::FETCH_ASSOC);
    $fullName = $userInformation["firstName"] . ' ' . $userInformation["Surname"];


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
    $stickerValue = implode('', $stickerGlobal);

    $mobileHeader = '';
    if (!empty($tagvalue) || !empty($stickerValue)) {
        $mobileHeader = '<div class="fs-5 pt-3 pb-3 mb-3" style="background-color:rgb(0, 143, 219);color:white;text-align:center;">Basic Mobile Device</div>';
    }

    $replaceNotificationArray = array();
    $replace_notif = $pdo->prepare("SELECT * FROM replace_notification WHERE application_id = ?");
    $replace_notif->execute([$application_id]);
    while ($replace_notification = $replace_notif->fetch(PDO::FETCH_ASSOC)) {
        if (isset($replace_notification["notification"]) && !empty($replace_notification["notification"])) {
            $replaceNotificationPush = '<p>' . $replace_notification["notification"] . '</p><hr>';
            array_push($replaceNotificationArray, $replaceNotificationPush);
        }
    }
    global $replaceGlobal;
    $replaceGlobal = $replaceNotificationArray;
    $replaceValue = implode('', $replaceGlobal);


    $mainHeader = '';
    if (!empty($replaceValue)) {
        $mainHeader = '<div class="fs-5 pt-3 pb-3 mb-3" style="background-color:rgb(0, 143, 219);color:white;text-align:center;">Main Device</div>';
    }

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
            p{
                padding-top: 3px;
                padding-bottom: 3px;
                margin-top: 0px;
                margin-bottom: 0px;
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
        <p style="font-size:24px;text-align:center">' . $fullName . ' Ishur Application</p>
        <hr>
        <br>
        <div class="superflo">
            <p>Hi ' . $fullName . ',</p>
            <br>
            ' . $header . '
        </div>
        <br><br>
        <div class="superflo">
        ' . $mobileHeader . '
            ' . $tagGlobalValue . ' 
            ' . $stickerValue . '
            ' . $mainHeader . '
            ' . $replaceValue . '
        </div>
        <br><br>
        <p>Office Hours:</p>
        <p>Sun-Thurs:</p>
        <p>10:00 am - 2:00 pm</p>
        <p>4:30 pm - 6:30 pm</p>
        <p>18 Linthorpe Rd, Basement Flat</p>
        <p>0333 344 6618  EXT 3</p>
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
