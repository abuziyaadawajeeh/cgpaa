$(document).ready(function () {
  var currentcgpa = document.getElementById("detailcgpa").innerHTML;
  var iscoe = document.getElementById("iscoe").innerHTML;

  if (iscoe == ".") {
    document.getElementById("gpanow").value = (9 * 8 - currentcgpa * 3) / 5;
    document.getElementById("gpafuture").value = (9 * 8 - currentcgpa * 3) / 5;
    document.getElementById("cgpa").value = "9.0";

    document.getElementById("maxcgpa").innerHTML = (currentcgpa * 3 + 50) / 8;
  } else if (iscoe == "") {
    document.getElementById("gpanow").value = (9 * 10 - currentcgpa * 3) / 7;
    document.getElementById("gpafuture").value = (9 * 10 - currentcgpa * 3) / 7;
    document.getElementById("cgpa").value = "9.0";

    document.getElementById("maxcgpa").innerHTML = (currentcgpa * 3 + 70) / 10;
  } else if (iscoe == ",") {
    // to check if it is a guest user.
    $(".vanish").hide();
    $("#guestbox").show();
  }

  $("#cgpa").keyup(cgpaset);
  $("#gpanow").keyup(gpaset);

  function cgpaset() {
    var cgpa = document.getElementById("cgpa").value;
    if (iscoe == ".") var requiredgpas = (cgpa * 8 - currentcgpa * 3) / 5;
    else if (iscoe == "") var requiredgpas = (cgpa * 10 - currentcgpa * 3) / 7;

    document.getElementById("gpanow").value = requiredgpas;
    document.getElementById("gpafuture").value = requiredgpas;
  }

  function gpaset() {
    var gpanow = document.getElementById("gpanow").value;
    var cgpa = document.getElementById("cgpa").value;
    if (iscoe == ".")
      var requiredgpas = (cgpa * 8 - currentcgpa * 3 - gpanow) / 4;
    var requiredgpas = (cgpa * 10 - currentcgpa * 3 - gpanow) / 6;
    document.getElementById("gpafuture").value = requiredgpas;
    if (iscoe == ".") {
      var formula = (currentcgpa * 3 + gpanow + 40) / 8;
      document.getElementById("maxcgpa").innerText = formula;
    } else if (iscoe == "") var formula = (currentcgpa * 3 + gpanow + 60) / 10;
  }

  // to show and hide editcurrent cgpa elements
  $("#vanishcgpa").click(reverteditcgpa1);
  $("#cancelcgpa").click(reverteditcgpa);

  function reverteditcgpa1() {
    $(".vanish").fadeToggle(100);
    setTimeout(function () {
      $(".editcgpa").fadeToggle();
    }, 100);
  }
  function reverteditcgpa() {
    $(".editcgpa").fadeToggle(100);
    setTimeout(function () {
      $(".vanish").fadeToggle();
    }, 100);
  }

  // to show and hide editusername elements
  $("#vanishusername").click(reverteditusername1);
  $("#cancelusername").click(reverteditusername);

  function reverteditusername1() {
    $(".vanish").fadeToggle(100);
    setTimeout(function () {
      $(".editusername").fadeToggle();
    }, 100);
  }
  function reverteditusername() {
    $(".editusername").fadeToggle(100);
    setTimeout(function () {
      $(".vanish").fadeToggle();
    }, 100);
  }

  // to show and hide editpassword elements
  $("#vanishpassword").click(reverteditpassword1);
  $("#cancelpassword").click(reverteditpassword);

  function reverteditpassword1() {
    $(".vanish").fadeToggle(100);
    setTimeout(function () {
      $(".editpassword").fadeToggle();
    }, 100);
  }
  function reverteditpassword() {
    $(".editpassword").fadeToggle(100);
    setTimeout(function () {
      $(".vanish").fadeToggle();
    }, 100);
  }

  // to highlight if new passwords do not match
  $("#password1").keyup(function (event) {
    var self = this;
    if (self.timer) clearTimeout(self.timer);

    self.timer = setTimeout(function () {
      self.timer = null;
      check();
    }, 500);
  });
  function check() {
    pwd = $("#password").val();
    pwd1 = $("#password1").val();
    if (pwd != pwd1) $("#password1").css("border", "2px solid red");
    else $("#password1").css("border", "4px solid green");
  }
});
