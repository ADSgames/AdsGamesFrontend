const fs = require("fs");
const glob = require("glob");
const path = require("path");
const zlib = require("zlib");

// Gzip artifacts after build is complete
exports.onPostBuild = async () =>
  new Promise((resolve) => {
    const publicPath = path.join(__dirname, "public");
    const options = { nodir: true };
    const gzippable = glob.sync(
      `${publicPath}/**/?(*.html|*.js|*.css|*.svg|*.json)`,
      options
    );
    gzippable.forEach((file) => {
      const content = fs.readFileSync(file);
      const zipped = zlib.gzipSync(content);
      fs.writeFileSync(`${file}`, zipped);
    });

    resolve();
  });
