//helper object used when filtering inside of /todos GET
const categories = {
  1: "To Buy",
  2: "To Read",
  3: "To Watch",
  4: "To Visit"
}

// JQuery / AJAX functions
$(() => {

  // example GET call, from project skeleton
  $.ajax({
    method: "GET",
    url: "/users"
  }).done((users) => {
    console.log(users);
    for(user of users) {
      $("<div>").text(user.first_name).appendTo($("body"));
    }
  });

  // call retrieves user items from db and appends to appropriate table
  $.ajax({
    method: "GET",
    url: "/todos"
  }).done((todos) => {
    for (todo of todos) {
      // console.log("This is todo.category_id:", todo.category_id);
      // console.log($('.list_header').html())
      // console.log("This is $('.list_header').val()):", $('.list_header').val())
      // if (todo.category_id === Number($('.list_header').val())){
        $("<li>").text(todo.name).appendTo($(".list"));
      };
  // }
  })

  // onclick function to make category id available in DOM
  $("#read").click(function() {
    $("<div>").attr('id', 'typeSelect').text(2).appendTo($('body'));
  });

  $("#watch").click(function() {
    $("<div>").attr('id', 'typeSelect').text(3).appendTo($('body'));
  });
  
  $("#buy").click(function() {
    $("<div>").attr('id', 'typeSelect').text(1).appendTo($('body'));
  });

  $("#visit").click(function() {
    $("<div>").attr('id', 'typeSelect').text(4).appendTo($('body'));
  });

  // makes query object and sends to API route
  $("#Submit").click(function() {
    let finalQuery = {
      category_id: $('#typeSelect').html(),
      query: document.getElementById("queryText").value,
      user_id: $("#user_id").html()
      };
      $.ajax({
          method: "POST",
          url: "/api",
          data: finalQuery
        }).done(() => {
          console.log('yay')
          })
  })

  
});
