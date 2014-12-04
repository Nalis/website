<?php
require 'php/contact.php';
$input_form = json_decode(file_get_contents('php://input'), true);

try {
  $contact = new Contact($input_form);
  $errors = $contact->validate();
  if(empty($errors)) {
    if($contact->sendMail()) {
      $result = ['status' => 'ok'];
    } else {
      $result = ['status' => 'failed'];
    }
  } else {
    $result = array('status' => 'failed', 'errors' => $errors);
  }
} catch(BadMethodCallException $e) {
  $result = ["status" => "exception"];
}

echo json_encode($result);
