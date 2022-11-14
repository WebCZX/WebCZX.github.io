$(function () {
  $.get('component/header.html', function (data) {
    $('#header').html(data);
  });
});
