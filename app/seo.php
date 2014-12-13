<?php
if(isset($_GET['_escaped_fragment_'])) {
  $pages = array("/about", "/contact_form", "/contacts", "/technologies");
  $routes = array();
  foreach($pages as $page) {
    $routes[$page] = "./views$page.html";
  }
  $routes["/"] = $routes["/contact_form"];

  $page = $_GET['_escaped_fragment_'];

  if(isset($routes[$page])) {
    include $routes[$page];
    exit (0);
  }
}
