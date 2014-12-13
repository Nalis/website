<?php
if(isset($_GET['_escaped_fragment_'])) {
  $pages = array("about", "contact_form", "contacts", "technologies");
  $routes = array();
  foreach($pages as $page) {
    $routes[$page] = "./views$page.html";
  }

  if(isset($routes[$page])) {
    include $routes[$page];
  }
  exit (0);
}
