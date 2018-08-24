$(() => {
  $.ajax({
    method: "GET",
    url: "/users"
  }).done((users) => {
    console.log(users);
    for(user of users) {
      $("<div>").text(user.first_name).appendTo($("body"));
    }
  });
  $.ajax({
    method: "GET",
    url: "/todos"
  }).done((todos) => {
    for (todo of todos) {
      $("<p>").text(todo.name).appendTo($(".container"));
      // filter though todos WITHIN this section
      console.log(todos);
    }
  })

  // must create category object to use when filtering with AJAX functions
});
