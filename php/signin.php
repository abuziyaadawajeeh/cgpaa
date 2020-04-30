<?php

// if(!isset($_POST['SUBMIT']))
//     header("Location:..\index.html?accessdenied");
$email=$_POST["email"];
$username=$_POST["username"];
$password=$_POST["password"];
$password1=$_POST["password1"];
$cgpa=$_POST["cgpa"];


// before entering into db make sure that the email is not already registered with
$hashedpassword= password_hash($password, PASSWORD_DEFAULT);
$query="insert into main (email,username, cgpa, password) values(?,?,?,?);";

include_once ("conn.php");
if($conn->connect_error)
    header("Location:../index.html?connectiontodbfailed1");

//to execute a prepared statement
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt,$query))
    header("Location:../index.html?statementpreparationfailed");
mysqli_stmt_bind_param($stmt,"ssds",$email,$username,$cgpa,$hashedpassword);
mysqli_stmt_execute($stmt);

echo "sign in successful la hawla wa laa quwwata illa billah";
