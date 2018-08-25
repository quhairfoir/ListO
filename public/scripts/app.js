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
        var $newTodo;
        if (todo.category_id === 1) {
          $newTodo = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #1 > .list"));
        } else if (todo.category_id === 2) {
          $newTodo = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #2 > .list"));
        } else if (todo.category_id === 3) {
          $newTodo = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #3 > .list"));
        } else if (todo.category_id === 4) {
          $newTodo = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .appendTo($(" #4 > .list"));
        }
        function getTodoID (element) {
          element.click(function() {
            selectedTodoID = element.attr("id").slice(5);
            console.log("selectedTodoID set to:", selectedTodoID);
          });
      }
      getTodoID($newTodo);
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

  const makeMoveObj = function() {
    let moveObj = {};
    let radioButtons = document.getElementsByName("category");
    console.log(radioButtons);
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked === true) {
        moveObj.category = radioButtons[i].value;
      } else {
        console.log("No button selected");
      }
    }
    if (selectedTodoID) {
      moveObj.id = selectedTodoID;
    }
    return moveObj;
  };

  // move todo form submission
  $("#move").on("click", function(event) {
    event.preventDefault();
    let moveObj = makeMoveObj();
    console.log("This is moveObj inside form submit:", moveObj);
    $.ajax({
        method: "POST",
        url: "/todos/move",
        data: moveObj,
        success: function() {
          location.reload();
        }
      }).done(console.log("Todo moved!"));

  });

  $("#delete").on("click", function(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/todos/delete",
      data: {
        id: selectedTodoID,
      },
      success: function() {
        location.reload();
      }
    }).done(console.log("Todo deleted"));
  });

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
