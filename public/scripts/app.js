// UNUSED helper object used when filtering inside of /todos GET
const categories = {
  buy: 1,
  read: 2,
  watch: 3,
  visit: 4
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
        var blablabla;
        if (todo.category_id === 1) {
          blablabla = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #1 > .list"));
        } else if (todo.category_id === 2) {
          blablabla = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #2 > .list"));
        } else if (todo.category_id === 3) {
          blablabla = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #3 > .list"));
        } else if (todo.category_id === 4) {
          blablabla = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #4 > .list"));
        }
        getTodoID(blablabla);
      }
    }
  });

  //variable for tracking clicked todo ID
  let selectedTodoID;

  // helper function, retrieves unique id from todo <li>'s id
  var getTodoID = function(element) {
    element.click(function() {
      selectedTodoID = element.attr("id").slice(5);
      console.log("selectedTodoID set to:", selectedTodoID);
    });
  };

  // move todo form submission 
  $("form").on("submit", function(event) {
    event.preventDefault();
    let text = event.target[0].value;
    console.log(text);
  });

  // $.ajax({
  //   method: "POST",
  //   url: "/todos/move",
  //   data: {
  //     id: selectedTodoID,
  //     new_category: 0,
  //   },
  //   success: function() {
  //     location.reload();
  //   }
  // }).done(console.log("Todo deleted"));

  // variable for tracking chosen query category
  let selectedCategory;

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
