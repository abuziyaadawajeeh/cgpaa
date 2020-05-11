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

    prevmaxcgpa = parseFloat(
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
        totalsems
    );

    document.getElementById("maxcgpa").value = prevmaxcgpa;
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

    prevmaxcgpa = parseFloat(
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
        totalsems
    );

    document.getElementById("maxcgpa").value = prevmaxcgpa;
  } else if (iscoe == ",") {
    // to check if it is a guest user.
    $(".vanish").hide();
    $("#guestbox").show();
    totalsems = 8;
    semscompleted = 3;
    currentcgpa = 8.9;
    document.getElementById("guesttotalsems").value = "8";
    document.getElementById("guestcompsems").value = "3";
    document.getElementById("guestcgpa").value = "8.9";
    semsremaining = totalsems - semscompleted - 1;
    document.getElementById("gpanow").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("gpafuture").value =
      (9 * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);
    document.getElementById("cgpa").value = "9.0";

    prevmaxcgpa = parseFloat(
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
        totalsems
    );

    document.getElementById("maxcgpa").value = prevmaxcgpa;
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

  $("#guestcgpa").keyup(cgpaset);
  $("#guestcompsems").keyup(cgpaset);
  $("#guesttotalsems").keyup(cgpaset);

  function cgpaset() {
    var cgpa = document.getElementById("cgpa").value;
    if (iscoe == ",") {
      totalsems = document.getElementById("guesttotalsems").value;
      semscompleted = document.getElementById("guestcompsems").value;
      currentcgpa = document.getElementById("guestcgpa").value;
    }
    requiredgpas =
      (cgpa * totalsems - currentcgpa * semscompleted) /
      (totalsems - semscompleted);

    document.getElementById("gpanow").value = requiredgpas;
    document.getElementById("gpafuture").value = requiredgpas;

    prevmaxcgpa = parseFloat(
      (currentcgpa * semscompleted + (totalsems - semscompleted) * 10) /
        totalsems
    );

    document.getElementById("maxcgpa").value = prevmaxcgpa;
  }

  function gpaset() {
    var gpanow = parseFloat(document.getElementById("gpanow").value);
    var cgpa = document.getElementById("cgpa").value;
    if (iscoe == ",") {
      totalsems = document.getElementById("guesttotalsems").value;
      semscompleted = document.getElementById("guestcompsems").value;
      currentcgpa = document.getElementById("guestcgpa").value;
      semsremaining = totalsems - semscompleted - 1;
    }
    requiredgpas =
      (cgpa * totalsems - currentcgpa * semscompleted - gpanow) / semsremaining;

    document.getElementById("gpafuture").value = requiredgpas;
    // prevmaxcgpa =
    //   (currentcgpa * semscompleted + gpanow + semsremaining * 10) / totalsems;

    // document.getElementById("maxcgpa").value = prevmaxcgpa;

    prevmaxcgpa = parseFloat(
      (currentcgpa * semscompleted + gpanow + semsremaining * 10) / totalsems
    );
    document.getElementById("maxcgpa").value = prevmaxcgpa;
  }

  function maximumcgpa() {
    var gpanow = document.getElementById("gpanow").value;
    if (iscoe == ".") {
      currentcgpa = document.getElementById("detailcgpa").innerHTML;
      totalsems = 8;
      semscompleted = 3;
      semsremaining = totalsems - semscompleted - 1;
    }
    if (iscoe == "") {
      currentcgpa = document.getElementById("detailcgpa").innerHTML;
      totalsems = 10;
      semscompleted = 3;
      semsremaining = totalsems - semscompleted - 1;
    }

    if (iscoe == ",") {
      totalsems = document.getElementById("guesttotalsems").value;
      semscompleted = document.getElementById("guestcompsems").value;
      currentcgpa = document.getElementById("guestcgpa").value;
      semsremaining = totalsems - semscompleted - 1;
    }

    // to update maximum possible cgpa
    var formula =
      (currentcgpa * semscompleted + gpanow + semsremaining * 10) / totalsems;
    document.getElementById("maxcgpa").value = formula;
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

  // ajax code to handle edit details opertations

  // document.getElementById("newcgpabutton").addEventListener("click", ajaxcgpa);

  // function ajaxcgpa() {
  //   var newcgpa = document.getElementById("newcgpa").value;
  //   document.getElementsByClassName("footer").innerHTML = newcgpa;
  //   var xmlhttp = new XMLHttpRequest();
  //   xmlhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       document.getElementsByClassName("footer").innerHTML = this.responseText;
  //     }
  //   };
  //   xmlhttp.open("GET", "../php/updatedetails.php?q=" + newcgpa, true);
  //   xmlhttp.send();
  // }
});
