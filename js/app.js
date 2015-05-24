$(document).ready(function() {
    moment.locale('es'); // set locale to spanish
    load_feed(); // load at start

    /**
     * If press button, reload
     */
    $('#reload-btn').on('click', function(event) {
      event.preventDefault();
      load_feed();
    });
});

/**
 * This load the rss feed in rss-feed element.
 * @return {[type]} [description]
 */
function load_feed() {
    $('#rss-feed').html(''); // clean content
    $('#rss-feed').rss("http://yucatan.com.mx/feed", {
        // This is the single entry template
      entryTemplate: `
      <div class="collection-item">
          <span class="title"><h5><a href="{url}">{title}</a></h5></span>
          <p>Autor: {author}. {date}</p>
          {shortBody}
      </div>
      `,
      // template of container
      layoutTemplate: `
      <div class="collection">
            {entries}
      </div>
      `,
      limit: 10, // how many entries we want to display
      dateFormat: 'MMMM D, YYYY', // format of date in entry
      effect: 'slideFastSynced', // just an animation
      ssl: true // use https to query and parse XML feed [required by chrome api]
    });
}
