<?php
session_start();
if(!isset($_SESSION["username"]))
{
    header("location:../index.php?message=loginproperly");
    exit();
}
if(!empty($_POST["submit"]))
{
    header("location:../main.php?message=submitrequest");
    exit();
}

$cgpa = floatval( $_POST["cgpa"]);
$email = $_SESSION["email"];

include_once ("conn.php");
$query = "UPDATE main set cgpa=? where email=?;";
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $query)){
    header("Location:../main.php?message=stmtprepfailed");
    exit();
}
mysqli_stmt_bind_param($stmt, "ds", $cgpa, $email);
mysqli_stmt_execute($stmt);
$_SESSION["newcgpa"]=$cgpa;

// to update other details

 // get class average
        $query = "select avg(cgpa) from main;";
        $result = mysqli_query($conn, $query);
        $result = mysqli_fetch_assoc($result);
        $_SESSION["averagecgpa"]=round($result["avg(cgpa)"],2);

        // to get the rank in class
        // $query = "select classrank from (SELECT email, rank() OVER ( order by cgpa desc ) classrank from main)mnmn where email =$email;";
        // $result=mysqli_multi_query($conn, $query);
        // $stmt=mysqli_stmt_init($conn);
        // if(!mysqli_stmt_prepare($stmt, $query))
        //     header("location:../main.php?stmtpreparationfailedclassrank");
        // mysqli_stmt_bind_param($stmt, "s",$email);
        // mysqli_stmt_execute($stmt);
        // mysqli_stmt_store_result($stmt);
        // $result = mysqli_fetch_assoc($result);
        // $_SESSION["classrank"]=$result["classrank"];

        // to get the number of ninepointers in the class
        $query = "SELECT email from main where cgpa >= 9;";
        $result=mysqli_query($conn,$query);
        $_SESSION["ninepointers"]=mysqli_num_rows($result);

        // to get the number of students in the range 8.5 to 9
        $query = "SELECT email from main where cgpa >= 8.5 && cgpa < 9;";
        $result=mysqli_query($conn,$query);
        $_SESSION["between8.5to9"]=mysqli_num_rows($result);

        // to get the number of students in the range 8.0 to 8.5
        $query = "SELECT email from main where cgpa >= 8 && cgpa<8.5;";
        $result=mysqli_query($conn,$query);
        $_SESSION["between8to8.5"]=mysqli_num_rows($result);

        // to get the number of students below 8
        $query = "SELECT email from main where cgpa < 8;";
        $result=mysqli_query($conn,$query);
        $_SESSION["below8"]=mysqli_num_rows($result);

        // to get the number of ninepointers in the class
        $query = "SELECT email from main;";
        $result=mysqli_query($conn,$query);
        $_SESSION["totalregistered"]=mysqli_num_rows($result);

header("location:../main.php?message=changecgpasuccess");
exit();
