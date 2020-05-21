jQuery(document).ready(function ($) {
    $('#logoCard').hide();
   function bookListItems(book) {
      var $li = $('<li>'); //<li></li>
      $li.addClass('list-group-item  border border-danger hover-invert cursor-pointer');
      $li.html(book.title);
      $li.data('bookId', book.id);
      return $li;
  }
 var request = axios.get("http://csc225.mockable.io/books");
 request.then(function (response) {
    $("#main").removeClass('d-none');
    $("#body").removeClass('blackbg');
    $("#logoLoad").hide();
   response.data.forEach(function (book) {
       $('#book-list').prepend(bookListItems(book));
   });

   $('.list-group-item').on('click', function () {
    $('.list-group-item').removeClass('active');
    var bookId = $(this).data('bookId');
    $(this).addClass('active');
    $('#logoCard').show();
    $('#info').hide();
    axios.get('http://csc225.mockable.io/books/' + bookId).then(
        function(response){
            $('#logoCard').hide();
            $('#info').show();
            var $img = $('<img>').attr('src', response.data.cover).attr('alt', response.data.cover).addClass('card-img');
            $('#cover').html($img);
            $('#title').html(response.data.title);
            $('#author').html("Author: " + response.data.author);
            $('#country').html("Country: " + response.data.country);
            $('#language').html("Langauge: " + response.data.language);
            $('#pages').html("Pages: " + response.data.pages);
            $('#year').html("Year: " + response.data.year);
            $('#link').attr('href', response.data.link).html('Link');
        }
    );
});
});
});