<?php

if(!isset($_POST["submit"]));
    header("Location:../index.html?accessdenied");

$email=$_POST["email"];
$password=$_POST["password"];
$query = "select email,password from main where email =?;";
include ("conn.php");
$stmt=mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $query))
    header("location:../index.html?stmtpreparationfailed");
mysqli_stmt_bind_param($stmt, "s",$email);
mysqli_stmt_execute($stmt);
// mysqli_stmt_store_result($stmt);
// $num=mysqli_stmt_num_rows($stmt);
// if($num==0)
//     header("Location:../index.html?registerfirst");
$result=mysqli_stmt_get_result($stmt);
$row=mysqli_fetch_assoc($result);
if(!$row)
    header("Location:../index.html?registerfirst");
else
{
    if(!password_verify($password,$row["password"]))
        header("Location:../index.html?incorrectpassword");
    else
        header("location:../index.html?loginsuccessful");
}


