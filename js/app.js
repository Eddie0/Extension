$(document).ready(function() {
    moment.locale('es');
  load_feed();

  $('#reload-btn').on('click', function(event) {
      event.preventDefault();
      load_feed();
  });
});

function load_feed() {
    $('#rss-feed').html('');
    $('#rss-feed').rss("http://yucatan.com.mx/feed", {
      entryTemplate: `
      <div class="collection-item">
          <span class="title"><h5><a href="{url}">{title}</a></h5></span>
          <p>Autor: {author}. {date}</p>
          {shortBody}
      </div>
      `,
      layoutTemplate: `
      <div class="collection">
            {entries}
      </div>
      `,
      limit: 10,
      dateFormat: 'MMMM D, YYYY',
      effect: 'slideFastSynced',
      ssl: true
    });
}
