function DateConverter () {
  this.timestampFromString = function (req, res) {
    // TODO
    res.json({sent: req.url.slice(1)});
  };
  this.timestampFromUnix = function (req, res) {
    // TODO
    res.json({sent: req.url.slice(1)});
  };
}

module.exports = DateConverter;