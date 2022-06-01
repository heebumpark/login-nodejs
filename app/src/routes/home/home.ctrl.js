"use strict";
const users = {
  id: ["baaams", "maplewilliam", "hbwilliam"],
  psword: ["1234", "123456", "12345678"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "Failed in login !",
    });
  },
};

module.exports = {
  output,
  process,
};
