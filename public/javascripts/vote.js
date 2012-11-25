$(document).ready(function() {
    $('.upvote').live("click", function(e) {
        vote_id = $(this).attr("id");
        $.post('/vote', { book: $('.result_name#' + vote_id).html(), value: 'up'});
        $(this).click(false);
        $(this).css('background-color', 'gray');
    });
    $('.downvote').live("click",function(e) {
        vote_id = $(this).attr("id");
        $.post('/vote', { book: $('.result_name#' + vote_id).html(), value:'down'});
        $(this).click(false);
        $(this).css('background-color', 'gray');
    });
});
