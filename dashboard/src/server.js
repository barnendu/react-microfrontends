import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = 4000;

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./dist/dashboard.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
