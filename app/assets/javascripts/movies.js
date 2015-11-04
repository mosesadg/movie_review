
$( "#hithere" ).on( "click", function() {

console.log("jquery workin");
// var Title ="Speed";
  var Title = ($("#search").val());
$(function () {

  var $orders = $('#orders');
  var $poster = $('#poster');
$.ajax({
  type: 'GET',
  // url: 'http://www.omdbapi.com/?t=spy&y=&plot=full&r=json&tomatoes=true',
   url: "http://www.omdbapi.com/?t=" + Title,


  success: function(orders) {
     console.log("title" +Title)
      console.log(orders); //returns all of johnbob's friends
      $orders.empty();

      $orders.append('<li>'+ orders.Title  +'</li>' );
      $orders.append('<li>'+ orders.Actors  +'</li>' );
      $orders.append('<li>'+ orders.Director +'</li>' );
      $orders.append('<li>'+ orders.Title   + orders.Plot +'</li>' );
      $orders.append('<img src = " '+ orders.Poster +'""</>' );

  }
});

});
});


// $(function () {
//
//   var $orders = $('#orders');
// $.ajax({
//   type: 'GET',
//   url: 'http://rest.learncode.academy/api/johnbob/friends',
//   success: function(orders) {
//     // console.log("I have friends!", orders); //returns all of johnbob's friends
//     $.each(orders, function(i, order) {
//       $orders.append('<li>Name: '+ order.name + ',Age' + order.drink + '</li>');
//     });
//   }
// });
//
// });
