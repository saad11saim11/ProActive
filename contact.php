<?php
session_start();
require "phpmailer/PHPMailerAutoload.php"; //PHPMailer Object 
$mail = new PHPMailer; //From email address and name 

$email = $_REQUEST['email'];
$fname = $_REQUEST['fname'];
$lname = $_REQUEST['lname'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];
// Make Changes Below for your mail server.

$mail->Host='mail.smtp2go.com'; // <- Outgoing Mail Server Here
$mail->Port=465; // <- SMTP POrt Here
$mail->isSMTP();
$mail->SMTPAuth=true;
$mail->SMTPSecure='ssl';
// $mail->SMTPDebug = 2;
$mail->Username='web-contact@proactivearuba.com'; // <- Your Email Address
$mail->Password='aWo2a3VsNWM3eTAw'; //<- Your Email Password
$mail->setFrom('web-contact@proactivearuba.com','Proactive IT Solutions'); // <- Sender Address
$mail->addAddress('info@proactivearuba.com');//Receiver Email

// Make Changes Above for your mail server.
$mailBody = "Hello,<br/><br/> New enquiry received.<br/><br/>";
$mailBody .= "Name: ".$fname." ".$lname."<br/>";
$mailBody .= "Phone: ".$phone."<br/>";
$mailBody .= "Email: ".$email."<br/>";
$mailBody .= "Message: ".$message."<br/><br/>"; 
$mailBody .= "Thank You.<br/><br/>Regards,<br/>Team Proactive IT Solutions";

$mail->addReplyTo($email); //Reply to Email
$mail->isHTML(true);
$mail->Subject='Proactive IT Solutions';
$mail->Body=$mailBody;



if ($mail->send()) {
    echo 1;
} else {
    echo 0;
}

// print_r($_REQUEST);
?>