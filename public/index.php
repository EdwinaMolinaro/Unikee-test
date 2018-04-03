<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Views\PhpRenderer;
require '../vendor/autoload.php';
require "../config/db.php";
$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);
// Get container
$container = $app->getContainer();

// Register component on container
$container['renderer'] = new PhpRenderer("../pages");
//pages
$app->get('/', function (Request $request, Response $response){
    return $this->renderer->render($response, "home.html");
});
$app->get('/login', function (Request $request, Response $response){
    return $this->renderer->render($response, "login.html");
});
//api
require "../api/login.php";
$app->run();
