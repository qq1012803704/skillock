require([], function() {
  var Link = function (_e) {
    var e = _e || {};
    var self = function () {
    };

    self.label = e.label || (e.url || 'Learn more');
    self.url = e.url || 'javascript:void(0)';

    return self;
  };

  return Link;
});
