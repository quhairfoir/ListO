// UNUSED helper object used when filtering inside of /todos GET
const categories = {
  "buy": 1,
  "read": 2,
  "watch": 3,
  "visit": 4
};

// JQuery / AJAX functions
$(() => {

  let selectedCategory;
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
    selectedCategory = 2;
  });

  $("#watch").click(function() {
    selectedCategory = 3;
  });

  $("#buy").click(function() {
    selectedCategory = 1;
  });

  $("#visit").click(function() {
    selectedCategory = 4;
  });

  // makes query object and sends to API route
  $("#Submit").click(function() {
    if (selectedCategory) {
    let finalQuery = {
      category_id: selectedCategory,
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
    } else {
      alert("You must choose a category!");
    }
  });
});