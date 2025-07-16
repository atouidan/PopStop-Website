module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
