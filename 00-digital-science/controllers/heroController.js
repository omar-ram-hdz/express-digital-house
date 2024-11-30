const db = require("../db/Science.js");
const heroController = {
  index: (req, res) => {
    res.render("hero", { data: db });
  },
  detail: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const hero = db.find((el) => el.id == id);
    console.log(hero);
    res.render("detail", { hero });
  },
  bio: (req, res) => {
    const { id, ok } = req.params;
    let err = false,
      hero = db.find((el) => el.id == id);

    if (!id || !hero) err = true;
    res.render("bio", { hero, ok, err });
  },
};
module.exports = heroController;
