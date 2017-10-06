$(function() {
  $(".burgerAvailable").on("click", function(event) {
    debugger;
    var id = $(this).data("id");
    var devouredState = $(this).data("devouredstate");

    var newDevouredState = {
      devoured: devouredState
    };

    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured state to", devouredState);
        location.reload();
      }).catch(function(err){
        console.log(err);
      });
  });

  $(".addBurgerButton").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#name").val().trim(),
      devoured: false
    };

    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added new burger");
        location.reload();
      });
  })
});
