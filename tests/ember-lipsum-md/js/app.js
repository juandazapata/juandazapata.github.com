App = Ember.Application.create();

App.EmIpsumMdComponent = Ember.Component.extend({
  //br tags included only to format before copy to clipboard
  paragraph: '<br/>Dolor sit amet, _consectetur adipisicing elit_,\
    sed do eiusmod **tempor incididunt** ut labore et dolore magna aliqua. Ut\
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
    aliquip ex ea **commodo consequat**. Duis aute irure dolor in reprehenderit\
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
    Excepteur sint _occaecat cupidatat non proident_, sunt in culpa qui\
    officia deserunt mollit anim id est laborum.<br/><br/>',

  generatedIpsum: function() {
    mdipsum = '';

    for(var i = 0; i < this.paragraphs; i++) {
      if(this.header === true) {
        mdipsum = mdipsum + '### Lorem ipsum dolor\n\n';
      }
      mdipsum = mdipsum + this.paragraph + '\n\n';
      if(this.list === true) {
        mdipsum = mdipsum + '\n\n- Some item\n\n - Some other item<br/><br/>\n\n';
      }
    }

    return mdipsum;
  }.property('paragraphs', 'header', 'list')
});

var showdown = new Showdown.converter();
Ember.Handlebars.helper('markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('raw', function(input) {
  return new Handlebars.SafeString(input);
});
