$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/users"
  // }).done((users) => {
  //   console.log(users);
  //   for(user of users) {
  //     $("<div>").text(user.first_name).appendTo($("body"));
  //     }
  //   }
  // });;
// let typeValue = "";
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
      console.log(finalQuery);
  })

  
});