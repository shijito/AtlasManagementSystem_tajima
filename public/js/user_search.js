$(function () {
  $('.search_conditions').click(function () {
    $('.search_conditions_inner').slideToggle();
    $('.arrow').toggleClass("rotate");
  });

  $('.subject_edit_btn').click(function () {
    $('.subject_inner').slideToggle();
    $('.arrow').toggleClass("rotate");
  });

  $('.post_category_list').click(function () {
    $('.post_category_inner').slideToggle();
    $('.arrow').toggleClass("rotate");
  });

});
