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
    // $('.list').on('click', 'li', function editFunc(){
    //   var x = document.getElementById("editForm");
    //   // if (x.style.display === 'none') {
    //   //     x.style.display = 'block';
    //   // }
      
    //   var oldCat = $(this).parent().parent().attr("id");
    //   console.log($(this).text);
    //   console.log(oldCat);
      
    //   // knex.select * from todos where name = item name
    //   // UPDATE todos SET category = 'whatever is selected' WHERE name = 'name';
    // });        

  });



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
