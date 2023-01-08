const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const config = {
    plugins: [
        autoprefixer,
        cssnano({ autoprefixer: false, preset: "default" }),
    ],
};

module.exports = config;
