<?php

class ContactTest extends PHPUnit_Framework_TestCase {
  public function testEmail() {
    $_SERVER['REMOTE_ADDR'] = '127.0.0.1';
    $form_data = array('contact_form' => 
      array('email' => 'Client mail',
            'main_business' => 'client main business',
            'problem' => 'Problemo',
            'basic_idea' => 'base idea'));

    $mail = "Client email: {$form_data['contact_form']['email']}\n";
    $mail .= "{$_SERVER['REMOTE_ADDR']}\n\n";
    $mail .= "Main business: {$form_data['contact_form']['main_business']}\n\n";
    $mail .= "Problem: {$form_data['contact_form']['problem']}\n\n";
    $mail .= "Idea: {$form_data['contact_form']['basic_idea']}\n\n";

    $contact = new Contact($form_data);
    $this->assertEquals($contact->mailText(), $mail);
  }

  /**
   * @expectedException BadMethodCallException
   */
  public function testBasicFormCheck() {
    $form_data = array('alabalalal' => 'buuu');
    new Contact($form_data);
  }

  public function testValidation() {

  }
}
