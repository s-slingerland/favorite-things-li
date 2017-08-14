$(document).ready(function(){
  $("form#user-fav-things").submit(function(event){
    event.preventDefault();
    var userThing1 = $("input#fav-thing-1").val();
    var userThing2 = $("input#fav-thing-2").val();
    var userThing3 = $("input#fav-thing-3").val();
    var userThing4 = $("input#fav-thing-4").val();

    var arrayByVar = [userThing1, userThing2, userThing3, userThing4];

    var newArray = [];

    arrayByVar.forEach(function(dawson){
      newArray.push(dawson);
    });


    newArray.forEach(function(purpleAngrySpaceBananas){
      $("ul#fav-list").append("<li>" +  purpleAngrySpaceBananas + "</li>");
    });

    // $("ul#fav-list").append("<li>" + newArray[1] + "</li>");
  });
});
