<?php

session_start();

if(!isset($_SESSION["username"])){
    header("location:../index.php?message=loginproperly");
    exit();
}

if(!empty($_POST["submit"]))
{
    header("location:../main.php?message=submitrequest");
    exit();
}

$password = $_POST["password"];
$password1 = $_POST["password1"];
$email = $_SESSION["email"];
if($password != $password1){
    header("location:../main.php?message=passwordsdonotmatch");
    exit();
}

$hashedpassword = password_hash($password, PASSWORD_DEFAULT);
include_once ("conn.php");
$query = "UPDATE main set password=? where email=?;";
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $query)){
    header("Location:../main.php?message=stmtprepfailed");
    exit();
}
mysqli_stmt_bind_param($stmt, "ss", $hashedpassword, $email);
mysqli_stmt_execute($stmt);

header("location:../main.php?message1=success");
exit();

