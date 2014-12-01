<?php

class ContactTest extends PHPUnit_Framework_TestCase {
  public function testEmail() {
    $form_data = array('contact_form' => 
      array('client_email' => 'Client mail',
            'client_main_business' => 'client main business',
            'client_problem' => 'Problemo',
            'basic_idea' => 'base idea'));

    $mail = "Client email: {$form_data['contact_form']['client_email']}\n\n";
    $mail .= "Main business: {$form_data['contact_form']['client_main_business']}\n\n";
    $mail .= "Problem: {$form_data['contact_form']['client_problem']}\n\n";
    $mail .= "Idea: {$form_data['contact_form']['basic_idea']}\n\n";

    $contact = new Contact($form_data);
    $this->assertEquals($contact->mailText(), $mail);
  }
}

