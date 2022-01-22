const autoprefixer = require("autoprefixer");

const config = {
    plugins: [
        autoprefixer,
        require("cssnano")({
            autoprefixer: false,
            preset: "default",
        }),
    ],
};

module.exports = config;
