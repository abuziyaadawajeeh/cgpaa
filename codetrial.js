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
});
