<?php
require 'php/contact.php';
$input_form = json_decode(file_get_contents('php://input'), true);

try {
  $contact = new Contact($input_form);
  $result = $contact->sendMail();
} catch(BadMethodCallException $e) {
  $result = "exception";
}

echo json_encode($result);
