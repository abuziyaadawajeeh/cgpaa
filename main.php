<?php
session_start();
if(!isset($_SESSION["username"]) && !isset($_SESSION["isguest"]) )
  header("Location:../index.php?loginproperly");
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CGPAA || Home</title>
    <link rel="stylesheet" href="./css/mainstyle.css" />
    <script src="jquery-3.5.0.js"></script>
    <script src="main.js"></script>
  </head>
  <body>
     <header id="header">
        <div class="headerlinks"> CGPAA</div>
      
        <a class="headerlinks" href="#down">ABOUT</a>

        <form class="vanis" style="display: none" action="./php/logout.php"><button type="submit"  > LOGOUT</button></form>
  
    </header>
    <div class="flexbox">
      <!-- flex item 1 for the details of the class -->
      
        <div class="detailscont">
          <p>Username : <?php
                    if($_SESSION["isguest"])
                      echo "guest";
                    else if(isset($_SESSION["newusername"]))
                            echo $_SESSION["newusername"];
                    else echo $_SESSION["username"];
                    ?></p>
          
          <p>Current CGPA : <div id="detailcgpa"><?php
                      if($_SESSION["isguest"])
                      echo "--";
                    else if (isset($_SESSION["newcgpa"]))
                      echo $_SESSION["newcgpa"];
                     else  echo $_SESSION["cgpa"];
                    ?></div></p>
          <p>IIITDM COE/CED 2018 Statistics</p>
          
          <p>No. of registered students<span id="iscoe"><?php 
            if($_SESSION["isguest"])
            echo ",";
            else 
            echo $_SESSION["iscoe"]; ?></span> : <?php echo $_SESSION["totalregistered"] ?></p>
          <!-- <p>Your Rank in Class : <?php echo $_SESSION["classrank"] ?></p> -->
          <p>No. of Nine-Pointers : <?php echo $_SESSION["ninepointers"]; ?></p>
          <p>No. of students between 8.5-9 : <?php echo $_SESSION["between8.5to9"]; ?></p>
          <p>No. of students between 8-8.5 : <?php echo $_SESSION["between8to8.5"]; ?></p>
          <p>No. of students below 8 : <?php echo $_SESSION["below8"]; ?></p>
          <p>Class Average CGPA : <?php echo $_SESSION["averagecgpa"];  ?></p>
          </div>

      <!-- flex item 2 for the service -->
        <div class="servicecont">
          <form action="" autocomplete="off">
            

            Target GPA / Expected GPA for this Sem <br /><br>
            <input id="gpanow" type="text" pattern="^((10)|([0-9])|([0-9]\.[0-9]{2})|([0-9].[0-9]))$"
              title="Enter a valid GPA Ex: 7, 8.9, 9.13" name="this" size="20" /><br /><br>
            GPA required from each of the upcoming Sem <br /><br>
            <input id="gpafuture" type="text" name="next" size="20"   style="background-color: grey" disabled /><br /><br>
            Target Final CGPA / CGPA after end of all Sems<br /><br>
        
            <input id="cgpa" type="text" pattern="^((10)|([0-9])|([0-9]\.[0-9]{2})|([0-9].[0-9]))$"
              title="Enter a valid GPA Ex: 7, 8.9, 9.13" name="end" size="20" /><br /><br>
            Maximum Final CGPA possible for you : <br> <br>
            <input type="text" disabled size="20" id="maxcgpa">
          </form>
        </div>
      
      
      
      <!-- flex item 3 for menu -->
        <div class="menucont">
        <!-- menu with options to edit cgpa, username etc.  -->
        <div id="message" style="display: none"><?php if(isset($_GET["message1"]))
                                  echo $_GET["message1"]; ?>
        
        </div><br>
        <form class="vanish" action="./php/logout.php"><button type="submit" id="#logoutbutton" > Logout</button></form>
        <button  class="vanish" id="vanishcgpa">Edit Current CGPA</button><br>
        <button id="vanishusername" class="vanish">Change Username</button><br>
        <button id="vanishpassword" class="vanish">Change Password</button>

          <!-- to change cgpa -->
        <form style="display: none" action="php/changecgpa.php" class="editcgpa" autocomplete="off" method="POST">
          <p>Enter your current CGPA : </p>
          <input type="text" required name="cgpa" id="newcgpa" pattern="^(([0-9]).([0-9]{2}))|(10.00)" placeholder="8.55"
            title="Ex: 8.72 or 10.00" />
          <button value="ssd" id="newcgpabutton" type="submit">Edit</button><br>
          <button id="cancelcgpa" >Cancel</button>
        </form>

        <!-- to change username -->
        <form style="display: none" action="./php/changeusername.php" class="editusername" autocomplete="off" method="POST">
          <p>Enter your Username : </p>
          <input type="text" required maxlength="20" name="username" placeholder="wajeeh" />
          <button value="sfds" type="submit">Edit</button><br>
          <button id="cancelusername">Cancel</button>
        </form>

        <!-- to change password -->

        <form style="display: none" action="php/changepassword.php" class="editpassword" method = "POST" autocomplete="off">
          <p>New Password : </p>
          <input type="password" name="password" id="password" maxlength="20" required class="labels" />
          <p>Confirm New Password : </p>
          <input type="password" name="password1" id="password1" maxlength="20" required class="labels" />
          <button value="sdfsd" type="submit">Change</button><br>
          <button id="cancelpassword">Cancel</button>
        </form>

        <form style="display:none" id="guestbox">
        <div>Enter the Current CGPA</div><br>
        <input required type="text" size=17 pattern="^(([0-9]).([0-9]{2}))|(10.00)" autofocus id="guestcgpa"> <br><br>
        <div>Total no. of Sems</div><br>
        <input  id="guesttotalsems" required type="text" size=17 ><br><br>
        <div>No. of Sems completed</div><br>
        <input id="guestcompsems" required type="text" size=17><br> <br>
        </form>
        </div>
      
        
      
      
      
    </div>
    <footer id="about">
      <h3>About CGPAA</h3>
      <br />
    
      <div>
        We are a group of students from IIITDM Kanchipuram pursuing a degree in
        Computer Science. We are from the batch of 2018 and as a part of our
        DBMS course, we were assigned with the task of learning Web Development
        languages and building a Full Stack App. So we created CGPAA to make the
        life of students a lot easier when it comes to analysing CGPA or GPAs.
        As for the front end, we used HTML, CSS and JS. As for the main service
        we provide, which is a dynamic CGPA analyser , it is run by Java Script.
        As for the rest of the Backend tasks, we are using PHP along with Mysql
        DB .
      </div>
      <br />
      <a id="down" href="">Have a look at the team behind CGPAA !</a>
    </footer>
  </body>
</html>
