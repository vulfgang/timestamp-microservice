function DateConverter () {
  this.timestampFromString = function (req, res) {
    var natural = req.url.slice(1).split('%20').join(' ');
    var unix    = new Date(natural).getTime();
    res.json({'unix': unix, 'natural': natural});
  };
  this.timestampFromUnix = function (req, res) {
    // TODO
    res.json({sent: req.url.slice(1)});
  };
}

module.exports = DateConverter;