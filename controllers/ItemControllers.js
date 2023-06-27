const Item = require("../models/item");

const getAll = async (req, res) => {
  try {
    const allProjects = await Item.find();

    res.json(allProjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to find projects" });
  }
};

const getOneView = async (req, res) => {
  try {
    const id = req.params.id;

    Item.findOneAndUpdate(
      { _id: id },
      { $inc: { viewsCount: 1 } },
      { returnDocument: "after" }
    )
      .then((doc) => res.json(doc))
      .catch((err) =>
        res.status(500).json({ message: "failed to find projects" })
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to find articles" });
  }
};

const getOneStars = async (req, res) => {
  try {
    const id = req.params.id;

    Item.findOneAndUpdate(
      { _id: id },
      { $inc: { likeCount: 1 } },
      { returnDocument: "after" }
    )
      .then((doc) => res.json(doc))
      .catch((err) =>
        res.status(500).json({ message: "failed to find projects" })
      );
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: "failed to find articles" });
  }
};

module.exports = { getAll, getOneView, getOneStars };
