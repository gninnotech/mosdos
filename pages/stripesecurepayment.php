<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
include '../database/dbConnection.php';
//application_forms
$applicationstmts = $pdo->prepare("SELECT * FROM application_forms WHERE application_id = '" . $_GET["appid"] . "'");
$applicationstmts->execute();
$applicationForm = $applicationstmts->fetch(PDO::FETCH_ASSOC);
//community
$communitystmts = $pdo->prepare("SELECT * FROM community WHERE application_id = '" . $applicationForm["application_id"] . "'");
$communitystmts->execute();
$community = $communitystmts->fetch(PDO::FETCH_ASSOC);

//community
$userinfostmts = $pdo->prepare("SELECT * FROM user_information WHERE user_id = '" . $applicationForm["user_id"] . "'");
$userinfostmts->execute();
$userInformation = $userinfostmts->fetch(PDO::FETCH_ASSOC);

//community
$synagoguestmts = $pdo->prepare("SELECT * FROM synagogue WHERE kehilla_id = '" . $community["kehilla_id"] . "'");
$synagoguestmts->execute();
$synagogue = $synagoguestmts->fetch(PDO::FETCH_ASSOC);

$institutionsstmts = $pdo->prepare("SELECT * FROM institutions WHERE kehilla_id = '" . $community["kehilla_id"] . "'");
$institutionsstmts->execute();


require_once('vendor/autoload.php'); // include the Stripe PHP library

\Stripe\Stripe::setApiKey('sk_test_51MPimiFdUvssGQEp7v4M0LkLT1E6EvKJ0zoYUMOfgoAUGJSnYVfinwQ1GlDmrRzKfI1TR9LAxlj5mefZUxIK2nyV00Wdtc20DX'); // set your Stripe API key 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the token ID submitted by the form
    $token = $_POST['stripeToken'];
    $email = $_POST['email'];
    $customer = \Stripe\Customer::create([
        'email' => $email,
        'source' => $token,
    ]);
    // Create a charge using the Stripe API
    if ($community["moised"] == "Ezreini Stamford Hill") {
        $charge = \Stripe\Charge::create([
            'amount' => 3500, // amount in cents
            'currency' => 'GBP',
            'description' => 'Ishur Certificate',
            'customer' => $customer->id,
            'receipt_email' => $email,
        ]);
    } else if ($community["moised"] == "Gur") {
        $charge = \Stripe\Charge::create([
            'amount' => 3500, // amount in cents
            'currency' => 'GBP',
            'description' => 'Ishur Certificate',
            'customer' => $customer->id,
            'receipt_email' => $email,
        ]);
    } else if ($community["moised"] == "Beis Chinuch" || $community["moised"] == "Venishmartem (Belz 99)") {
        $charge = \Stripe\Charge::create([
            'amount' => 3500, // amount in cents
            'currency' => 'GBP',
            'description' => 'Ishur Certificate',
            'customer' => $customer->id,
            'receipt_email' => $email,
        ]);
    } else if ($community["moised"] == "Westcliff") {
        $charge = \Stripe\Charge::create([
            'amount' => 2500, // amount in cents
            'currency' => 'GBP',
            'description' => 'Ishur Certificate',
            'customer' => $customer->id,
            'receipt_email' => $email,
        ]);
    } else if ($community["moised"] == "Mishmeres-Satmar") {
        $charge = \Stripe\Charge::create([
            'amount' => 5000, // amount in cents
            'currency' => 'GBP',
            'description' => 'Ishur Certificate',
            'customer' => $customer->id,
            'receipt_email' => $email,
        ]);
    } else {
        $charge = \Stripe\Charge::create([
            'amount' => 1000, // amount in cents
            'currency' => 'GBP',
            'description' => 'Ishur Certificate',
            'customer' => $customer->id,
            'receipt_email' => $email,
        ]);
    }
    // Display a thank you message to the user
    $paid = 'Paid';
    $application_id = $applicationForm["application_id"];
    $updateApplicationPayment = $pdo->prepare("UPDATE application_forms SET ishurPayment = ? WHERE application_id = ?");
    $updateApplicationPayment->execute([$paid, $application_id]);

}
?>