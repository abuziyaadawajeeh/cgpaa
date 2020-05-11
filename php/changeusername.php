<?php 
session_start();
if(!isset($_SESSION["username"]))
{
    header("location:../index.php?loginproperly?".$_SESSION["username"]."");
    exit();
}

if(!empty($_POST["submit"])){
    header("location:../main.php?message=submitrequest");
    exit();
}

$username = $_POST["username"];
$email = $_SESSION["email"];
$query = "UPDATE main set username=? where email = ?;";
include_once("conn.php");
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $query)){
    header("Location:../main.php?message=stmtprepfailed");
    exit();
}
mysqli_stmt_bind_param($stmt, "ss", $username, $email);
mysqli_stmt_execute($stmt);
$result = mysqli_store_result($stmt);
// if(!mysqli_num_rows($result))
// {
//     header("location:../main.php?message=norowsaffected");
//     exit();
// }
$_SESSION["username"] = $username; 
header("location:../main.php?message1=success");
exit();

