<?php

// if(!isset($_POST['SUBMIT']))
//     header("Location:..\index.php?accessdenied");
$email=$_POST["email"];
$username=$_POST["username"];
$password=$_POST["password"];
$password1=$_POST["password1"];
$cgpa=$_POST["cgpa"];

// to connect to the db
include_once ("conn.php");
if($conn->connect_error){
        header("Location:../index.php?message=connectiontodbfailed1");
        exit();
}



// before signup the user make sure that the email is not already registered with

$query2="select email from main where email =?;";
include_once ("conn.php");
if($conn->connect_error)
    die("connection error:".$conn->connect_error);


$stmt2 = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt2,$query2))
    header("Location:../index.php?statementpreparationfailedforchecking");
mysqli_stmt_bind_param($stmt2,"s",$email);
mysqli_stmt_execute($stmt2);
mysqli_stmt_store_result($stmt2);

$count = mysqli_stmt_num_rows($stmt2);

if($count>0){
    header("Location:../index.php?message=emailalreadyregistered");
    exit();
}
mysqli_stmt_close($stmt2);

if($password != $password1){
    header("Location:../index.php?message=passwordsdonotmatch");
    exit();
}


$hashedpassword= password_hash($password, PASSWORD_DEFAULT);
$query="insert into main (email,username, cgpa, password) values(?,?,?,?);";



//to execute a prepared statement
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt,$query)){
    header("Location:../index.php?statementpreparationfailed");
    exit();
}
mysqli_stmt_bind_param($stmt,"ssds",$email,$username,$cgpa,$hashedpassword);
mysqli_stmt_execute($stmt);

if(!$conn->connect_error)
    header("Location:../index.php?message=registrationsuccesful");


//however email verification feature is left. 
