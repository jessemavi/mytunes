// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({ 

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    this.fetch({
      data: {limit: 10}
    });
  },

  parse: function(response) {
    return response.results;
  }

});

  //   var context = this;

  //   $.ajax({
  //     // This is the url you should use to communicate with the parse API server.
  //     url: 'https://api.parse.com/1/classes/songs/',
  //     type: 'GET',
  //     contentType: 'application/json',
  //     success: function (data) {
  //       console.log('data fetch success');
  //       context.populateSongs(data.results);
  //     },
  //     error: function (data) {
  //       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //       console.error('failed to get songs', data);
  //     }
  //   });
  // },

  // populateSongs: function(songs) {
  //   this.set(songs);
  // }