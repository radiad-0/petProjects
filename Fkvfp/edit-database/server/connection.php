<?php
$conn = new mysqli("localhost", "root", "mypassword");
if($conn->connect_error){
    die("Ошибка: " . $conn->connect_error);
}