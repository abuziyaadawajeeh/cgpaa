<?php
session_start();

$newcgpa = $_GET["cgpa"];

$query = "UPDATE main set cgpa=".$newcgpa." where email= ".$_SESSION["email"].";";
include_once ('conn.ph');
$result = mysqli_query($conn, $query);

echo "ok";
