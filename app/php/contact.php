<?php

class Contact {
  private $mandatory_fields = ['email', 'main_business', 'problem', 'basic_idea'];

  public function Contact($form) {
    $this->internalValidation($form);
    $this->form_data = $form['contact_form'];
  }

  public function validate() {
    $errors = array();

    foreach($this->mandatory_fields as $field) {
      if(!isset($this->form_data[$field])) {
        $errors[$field] = "Please fill up the $field";
      }
    }

    if(!isset($errors['email']) && (strlen($this->form_data['email']) > 60 || !preg_match('/.*@.*\..*/', $this->form_data['email']))) {
      $errors['email'] = 'Invalid email';
    }

    return $errors;
  }

  public function mailText() {
    $mail = "Client email: {$this->form_data['email']}\n";
    $mail .= $_SERVER['REMOTE_ADDR'] ."\n\n";
    $mail .= "Main business: {$this->form_data['main_business']}\n\n";
    $mail .= "Problem: {$this->form_data['problem']}\n\n";
    $mail .= "Idea: {$this->form_data['basic_idea']}\n\n";
    return $mail;
  }

  public function sendMail() {
    return mail('bostko@gmail.com', 'Contact form', $this->mailText());
  }

  private function internalValidation($form) {
    if(!isset($form['contact_form'])) {
      throw new BadMethodCallException('no contact form');
    }
  }
}
