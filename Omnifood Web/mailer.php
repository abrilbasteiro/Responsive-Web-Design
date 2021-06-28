<?php

    // Get the form fields, removes html tags and whitespace.    
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    // Set the recipient email address.
    $recipient = "email@mcorreo.com";

    // Set the email subject.
    $subject = "New messagge from $name";

    // Build the email content.
    $email_content = "Nombre: $name\n\nEmail: $email\n\nMensaje: $message";

    // Build the email headers.
    $email_headers = "From: <$email>";

    // Check the data.
    if ( empty($message) OR empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        // Redirect to the index.html page with error code
        header("Location: Index.php?success=-1#form");    
    }else{ 
        // Set a 200 (okay) response code.
        mail($recipient, $subject, $email_content, $email_headers);
        http_response_code(200);
        // Redirect to the index.html page with success code        
        header("Location: Index.php?success=1#form");    
    };
        
?>