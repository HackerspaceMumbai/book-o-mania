$(document).ready(function() {
    $('.submit').click( function(e) {
        e.preventDefault();
        $.post('/result', {book: $('#book_name1').val()}, function(data) {
            $('form').after(data);
        }, 'html');
    });
});
