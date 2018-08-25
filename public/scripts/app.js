//helper object used when filtering inside of /todos GET
const categories = {
  1: "To Buy",
  2: "To Read",
  3: "To Watch",
  4: "To Visit"
}

// JQuery / AJAX functions
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
      console.log("This is todo.category_id:", todo.category_id);
      console.log($('.list_header').html())
      console.log("This is $('.list_header').val()):", $('.list_header').val())
      if (todo.category_id === Number($('.list_header').val())){
        $("<li>").text(todo.name).appendTo($(".list"));
      };
      
      // filter though todos WITHIN this section
      // console.log(todo.category_id)
      // $("<h3>").text(categories[todo.category_id]).appendTo($(".container"));

    // }
  }
  })
})
