$(document).ready(function() {
    $('.submit').click( function(e) {
        e.preventDefault();
        $.post('/result', {book: $('#book_name').val()}, function(data) {
            $('#book_result').html(data);
        }, 'html');
        $(this).scrollTop(100);
    });
});
