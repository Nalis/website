<?php
require 'php/contact.php';
$input_form = json_decode(file_get_contents('php://input'), true);

try {
  $contact = new Contact($input_form);
  $contact->sendEmail();
} catch(BadMethodCallException $e) {
  echo "exception";
} finally {
  echo 'Mail sent';
}

echo json_encode($input_form);
