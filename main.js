$(document).ready(function () {
  var currentcgpa;
  var totalsems;
  var semscompleted;
  var requiredgpas;
  var semsremaining;

  currentcgpa = document.getElementById("detailcgpa").innerHTML;
  var iscoe = document.getElementById("iscoe").innerHTML;

  if (iscoe == ".") {
    currentcgpa = document.getElementById("detailcgpa").innerHTML;
    totalsems = 8;
    semscompleted = 3;
    semsremaining = totalsems - semscompleted - 1;
    document.getElementById("gpanow").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("gpafuture").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("cgpa").value = "9.0";

    document.getElementById("maxcgpa").innerHTML =
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
      totalsems;
  } else if (iscoe == "") {
    currentcgpa = document.getElementById("detailcgpa").innerHTML;
    totalsems = 10;
    semscompleted = 3;
    semsremaining = totalsems - semscompleted - 1;

    document.getElementById("gpanow").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("gpafuture").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("cgpa").value = "9.0";

    document.getElementById("maxcgpa").innerHTML =
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
      totalsems;
  } else if (iscoe == ",") {
    // to check if it is a guest user.
    $(".vanish").hide();
    $("#guestbox").show();
    totalsems = 8;
    semscompleted = 3;
    currentcgpa = 8.9;
    semsremaining = totalsems - semscompleted - 1;
    document.getElementById("gpanow").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("gpafuture").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("cgpa").value = "9.0";

    document.getElementById("maxcgpa").innerHTML =
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
      totalsems;
  }

  $("#guestbutton").click(function () {
    totalsems = document.getElementById("guesttotalsems").value;
    semscompleted = document.getElementById("guestcompsems").value;
    currentcgpa = document.getElementById("guestcgpa").value;

    // var cgpa = document.getElementById("cgpa").value;
    // requiredgpas =
    //   (cgpa * totalsems - currentcgpa * semscompleted) /
    //   (totalsems - semscompleted);
    // console.log("here");
    // document.getElementById("gpanow").value = requiredgpas;
    // document.getElementById("gpafuture").value = requiredgpas;
  });

  $("#cgpa").keyup(cgpaset);
  $("#gpanow").keyup(gpaset);

  function cgpaset() {
    var cgpa = document.getElementById("cgpa").value;
    requiredgpas =
      (cgpa * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);

    document.getElementById("gpanow").value = requiredgpas;
    document.getElementById("gpafuture").value = requiredgpas;
  }

  function gpaset() {
    var gpanow = document.getElementById("gpanow").value;
    var cgpa = document.getElementById("cgpa").value;
    requiredgpas =
      (cgpa * totalsems - currentcgpa * semscompleted - gpanow) / semsremaining;

    document.getElementById("gpafuture").value = requiredgpas;
    // to update maximum possible cgpa
    var formula =
      (currentcgpa * semscompleted + gpanow + semsremaining * 10) / totalsems;
    document.getElementById("maxcgpa").innerText = formula;
  }

  // =============================================
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
