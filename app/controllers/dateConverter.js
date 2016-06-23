function DateConverter () {
  var months = ["January", "February", "March", "April",
                "May", "June", "July", "August", "September",
                "October", "November", "December"];

  this.timestampFromString = function (req, res) {
    var natural = req.url.slice(1).split('%20').join(' ');
    var unix    = new Date(natural).getTime();
    res.json({'unix': unix, 'natural': natural});
  };

  this.timestampFromUnix = function (req, res) {
    var date = new Date(parseInt(req.url.slice(1)));
    var natural = months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();
    var unix = date.getTime();
    res.json({'unix': unix, 'natural': natural});
  };
}

module.exports = DateConverter;