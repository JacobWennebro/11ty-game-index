module.exports = config => {

    config.addWatchTarget("./src/styles/");
    config.addPassthroughCopy("./src/css")

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }

};