<?php
//file to establish connection with the database
$dbservername="localhost";
$dbusername="root";
$dbpassword="";
$dbname="cgpaa";

// $dbservername="localhost";
// $dbusername="id13396845_cgpaaa";
// $dbpassword="@ql\jwxpOtnT3I2j";
// $dbname="id13396845_cgpaa";

// $dbservername="z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
// $dbusername="lnwole1ih5mpwajr";
// $dbpassword="w4mpk2gyi6oi227r";
// $dbname="jhylgyi9s691ds2q";



$conn=mysqli_connect($dbservername,$dbusername,$dbpassword,$dbname);
if($conn->error)
    header("Location:../index.html?databaseconnectionerror");


