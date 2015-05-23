$(document).ready(function() {
  $('rss-feed').rss("", {
    entryTemplate: '<p>{title}</p>'
  });
});
