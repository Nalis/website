<?php

class Contact {
  public function Contact($form) {
    $this->validate($form);
    $this->form_data = $form['contact_form'];
  }

  public function mailText() {
    $mail = "Client email: {$this->form_data['client_email']}\n\n";
    $mail .= "Main business: {$this->form_data['client_main_business']}\n\n";
    $mail .= "Problem: {$this->form_data['client_problem']}\n\n";
    $mail .= "Idea: {$this->form_data['basic_idea']}\n\n";
    return $mail;
  }

  public function sendMail() {
    return mail('Valentin Aitken <bostko@gmail.com>', 'Contact form', $this->mailText());
  }

  private function validate($form) {
    if(!$form['contact_form']) {
      throw new BadMethodCallException('no contact form');
    }
  }
}
