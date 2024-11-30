const data = require("../db/Bands");

const controller = {
  index: (req, res) => {
    res.render("index", { data });
  },
  getById: (req, res) => {
    const { id } = req.params;
    if (!id)
      return res.render("band", {
        error: true,
        messageError: "Id no enviado",
      });
    const band = data.find((el) => el.id == id);
    console.log(band);
    if (!band)
      return res.render("band", {
        error: true,
        messageError: `No se encontró ninguna banda con el id ${id}`,
      });
    return res.render("band", { error: false, band });
  },
  showGenders: (req, res) => {
    const genders = new Set();
    data.forEach((el) => genders.add(el.genero));
    console.log(genders);
    return res.render("showGenders", { genders: Array.from(genders) });
  },
  getByGender: (req, res) => {
    const { gen } = req.params;
    if (!gen)
      return res.render("genders", {
        error: true,
        messageError: "Genero no enviado",
      });
    const bands = data.filter((el) => el.genero == gen);
    if (!bands)
      return res.render("genders", {
        error: true,
        messageError: `No se encontró ninguna banda del genero: ${gen}`,
      });
    return res.render("genders", { data: bands, error: false, gender: gen });
  },
};

module.exports = controller;
