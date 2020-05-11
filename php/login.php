<?php

if(empty($_POST["mybutton"])){
    session_start();
    $_SESSION["isguest"]=true;
    goto there;

}

$email=$_POST["email"];
$password=$_POST["password"];
$query = "select email,password,username,cgpa from main where email =?;";
include ("conn.php");
if($conn->error)
{
    header("Location:../index.php?dbconnerror");
    exit();
}
$stmt=mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $query))
    header("location:../index.php?stmtpreparationfailed");
mysqli_stmt_bind_param($stmt, "s",$email);
mysqli_stmt_execute($stmt);
// mysqli_stmt_store_result($stmt);
// $num=mysqli_stmt_num_rows($stmt);
// if($num==0)
//     header("Location:../index.php?registerfirst");
$result=mysqli_stmt_get_result($stmt);
$row=mysqli_fetch_assoc($result);
mysqli_stmt_close($stmt);
if(!$row){
    header("Location:../index.php?message=registerfirst");

    exit();

}

else
{
    if(!password_verify($password,$row["password"])){
        header("Location:../index.php?message=incorrectpassword");
    
        exit();

    }
    else{
        session_start();
        $_SESSION["username"]=$row["username"];
        $_SESSION["isguest"] = false;
        $_SESSION["email"] = $email; 
        $_SESSION["cgpa"]=$row["cgpa"];

        there: 
        include ("conn.php");


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

        if(isset($_SESSION["cgpa"])){

        if(preg_match("/^(coe)/", $email))
        {   $_SESSION["iscoe"]=".";
            
        }
        if(preg_match("/^(ced)/", $email))
            $_SESSION["iscoe"]="";
        header("location:../main.php?loginsuccessful?".$_SESSION["username"]."&".$_SESSION["isguest"]."");
        exit();
        }
        
        


        header("location:../main.php?loginsuccessful?username=guest&".$_SESSION["isguest"]."");
        exit();
    }
}


