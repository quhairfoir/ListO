// // UNUSED helper object used when filtering inside of /todos GET
// const categories = {
//   buy: 1,
//   read: 2,
//   watch: 3,
//   visit: 4
// };

// JQuery / AJAX functions
$(() => {
  
  //
  $.ajax({
    method: "GET",
    url: "/users"
  }).done(users => {
    for (user of users) {
      if (user.id === Number($("#user_id").text())) {
        $("#user_name").text(user.first_name + "'s Lists");
      }
    }
  });

  // call retrieves user items from db and appends to appropriate table
  $.ajax({
    method: "GET",
    url: "/todos"
  }).done(todos => {
    for (todo of todos) {
      if (todo.user_id === Number($("#user_id").html())) {
        console.log(todo);
        var $newTodo;
          $newTodo = $("<li>")
            .text(todo.name)
            .attr("id", "todo_" + todo.id)
            .attr("class", "listItem")
            .appendTo($(`#${todo.category_id} > .list`));
        function getTodoID (element) {
          element.click(function() {
            selectedTodoID = element.attr("id").slice(5);
            console.log("selectedTodoID set to:", selectedTodoID);
                  $('#editForm').slideToggle("slow").css("visibility", "visible", "display", "block")
              });
      }
      getTodoID($newTodo);
      $("<li>")
        .text(todo.description)
        .attr("class", "desc_li")
        .appendTo($(`#${todo.category_id} > .list`));
    }
  }
  });

  //variable for tracking clicked todo ID
  let selectedTodoID;

  // sends edit user form data to POST /users/edit
  $("#editProfile").on("submit", function(event) {
    event.preventDefault();
    let editUserObj = {
      id: $("#user_id").html(),
      first_name: event.target[0].value,
      last_name: event.target[1].value,
      email: event.target[3].value,
      username: event.target[2].value
      // password: event.target[4].value
    }
    console.log(editUserObj);
    $.ajax({
      method: "POST",
      url: "/users/edit",
      data: editUserObj,
      success: function() {
        location.reload();
      }
    }).done(console.log("User sucessfully edited!"));
  });

  // helper function that gets data required to move a todo to a different list 
  const makeMoveObj = function() {
    let moveObj = {};
    let radioButtons = document.getElementsByName("category");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked === true) {
        moveObj.category = radioButtons[i].value;
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

  // delete todo form submission
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

  $('#category_choice').on("submit", function(event) {
    event.preventDefault();
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
