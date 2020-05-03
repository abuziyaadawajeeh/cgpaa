$(document).ready(function () {
  var currentcgpa = document.getElementById("detailcgpa").innerHTML;

  document.getElementById("gpanow").value = (9 * 8 - currentcgpa * 3) / 5;
  document.getElementById("gpafuture").value = (9 * 8 - currentcgpa * 3) / 5;
  document.getElementById("cgpa").value = "9.0";

  document.getElementById("maxcgpa").innerHTML = (currentcgpa * 3 + 50) / 8;

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
    var formula = (currentcgpa * 3 + gpanow + 40) / 8;
    document.getElementById("maxcgpa").innerText = formula;
  }
});
