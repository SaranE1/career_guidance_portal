<?php

require "vendor/autoload.php";

use GeminiAPI\Client;
use GeminiAPI\Resources\Parts\TextPart;

$data = json_decode(file_get_contents("php://input"));

$text = $data->text;
$newValue = " This is my skills what is the jobs i should prefer give me the results in comma separated values";
$text .= $newValue;


$client = new Client("AIzaSyA1ymwgdj-1AUs5fQpLeHhHGsKVo6vcu2M");

$response = $client->geminiPro()->generateContent(
    new TextPart($text),
);

echo $response->text();
?>