const module = {
  id: 2, title: "New NodeJS Module",
  description: "New Create a NodeJS server with ExpressJS",
  course:"Web development",
  score: 100,
  completed: true
};
export default function Module(app) {
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/title", (req, res) => {
    res.json(module.title);
  });
    app.get("/lab5/module/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    module.title = newTitle;
    res.json(module);
  });
  app.get("/lab5/module/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    module.score = newScore;
    res.json(module);
  });
  app.get("/lab5/module/completed/:newChecked", (req, res) => {
    const { newChecked } = req.params;
    module.checked = newChecked;
    res.json(module);
  });
};
  

