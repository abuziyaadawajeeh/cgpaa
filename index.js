$(document).ready(function () {
  $(".link1").click(rollup);
  $(".link2").click(rolldown);

  function rollup() {
    $(".login").slideToggle(300);
    $(".link1").toggle();
    $(".signup").toggle(300);
    $(".link2").toggle();
  }
  function rolldown() {
    $(".signup").toggle();
    $(".link2").toggle();
    $(".login").slideToggle(400);
    $(".link1").toggle();
  }

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
    else $("#password1").css("border", "2px solid green");
  }
});
