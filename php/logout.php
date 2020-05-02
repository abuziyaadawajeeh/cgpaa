<?php
session_start();
session_unset();
session_destroy();
header("Location:../index.html?loggedout&".$_SESSION["username"]."");