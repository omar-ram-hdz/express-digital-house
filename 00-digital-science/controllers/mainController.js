const mainController = Object.freeze({
  index: (req, res) => {
    res.render("index");
  },
  credits: (req, res) => {
    res.render("credits");
  },
});

module.exports = mainController;
