$(document).ready(function(){
  $.each ($(".links"),function(index,value){
    $(value).hide();
  });
  $("td").click(function(element){
    var clicked = $(element.target).closest("#abs").parent();
    clicked.find ("#title").fadeOut (1000);
    clicked.find (".links").fadeIn (1000);
  });
  $(".password").click(function(element){
    element.preventDefault()
    var login = prompt ("Password?");
    if (login == "gum") {
      window.location.href = element.currentTarget.href;
    } else {
        alert ("no.")
      }

  })
});
