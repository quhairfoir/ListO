// UNUSED helper object used when filtering inside of /todos GET
const categories = {
  1: "To Buy",
  2: "To Read",
  3: "To Watch",
  4: "To Visit"
};

// JQuery / AJAX functions
$(() => {

  // call retrieves user items from db and appends to appropriate table
  $.ajax({
    method: "GET",
    url: "/todos"
  }).done(todos => {
    for (todo of todos) {
      if (todo.user_id === Number($("#user_id").html())) {
        if (todo.category_id === 1) {
          $("<li>")
            .text(todo.name)
            .appendTo($(" #1 > .list"));
        } else if (todo.category_id === 2) {
          $("<li>")
            .text(todo.name)
            .appendTo($(" #2 > .list"));
        } else if (todo.category_id === 3) {
          $("<li>")
            .text(todo.name)
            .appendTo($(" #3 > .list"));
        } else if (todo.category_id === 4) {
          $("<li>")
            .text(todo.name)
            .appendTo($(" #4 > .list"));
        }
      }
    }
  });

  // onclick function to make category id available in DOM
  $("#read").click(function() {
    $("<div>")
      .attr("id", "typeSelect")
      .text(2)
      .css("visibility", "hidden")
      .appendTo($("body"));
  });

  $("#watch").click(function() {
    $("<div>")
      .attr("id", "typeSelect")
      .text(3)
      .css("visibility", "hidden")
      .appendTo($("body"));
  });

  $("#buy").click(function() {
    $("<div>")
      .attr("id", "typeSelect")
      .text(1)
      .css("visibility", "hidden")
      .appendTo($("body"));
  });

  $("#visit").click(function() {
    $("<div>")
      .attr("id", "typeSelect")
      .text(4)
      .css("visibility", "hidden")
      .appendTo($("body"));
  });

  // makes query object and sends to API route
  $("#Submit").click(function() {
    let finalQuery = {
      category_id: $("#typeSelect").html(),
      query: document.getElementById("queryText").value,
      user_id: $("#user_id").html()
    };
    $.ajax({
      method: "POST",
      url: "/api",
      data: finalQuery,
      success: function() {   
        location.reload();  
      }
    }).done(() => {
      console.log("yay");
    });
  });
});

