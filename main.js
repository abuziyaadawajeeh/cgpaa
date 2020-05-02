$(document).ready(function () {
  var currentcgpa = 7.6;

  document.getElementById("gpanow").value = "9.0";
  document.getElementById("gpafuture").value = "9.0";
  document.getElementById("cgpa").value = "9.0";

  $("#cgpa").keyup(cgpaset);
  $("#gpanow").keyup(gpaset);

  function cgpaset() {
    var cgpa = document.getElementById("cgpa").value;
    var requiredgpas = (cgpa * 8 - currentcgpa * 3) / 5;
    document.getElementById("gpanow").value = requiredgpas;
    document.getElementById("gpafuture").value = requiredgpas;
  }

  function gpaset() {
    var gpanow = document.getElementById("gpanow").value;
    var cgpa = document.getElementById("cgpa").value;
    var requiredgpas = (cgpa * 8 - currentcgpa * 3 - gpanow) / 4;
    document.getElementById("gpafuture").value = requiredgpas;
  }
});
