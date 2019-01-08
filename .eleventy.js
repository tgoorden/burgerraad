const sass = require('node-sass');
const fs = require('fs');
const mkdirp = require('mkdirp');
module.exports = function(eleventyConfig) {
  // Filter source file names using a glob
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("_posts/*.md");
  });
  eleventyConfig.addPassthroughCopy("assets");
  //eleventyConfig.addPassthroughCopy("css");
  mkdirp("_site/css",function(e) {
    if (!e) {
      sass.render({
        file: "css/main.scss"
      }, function(err,result) {
        if (!err) {
          fs.writeFile("_site/css/main.css", result.css, function(error){
            if(error){
              console.log(error);
            }
          });
        } else {
          console.log(err);
        }
      });
    }
  });
  return {
    passthroughFileCopy: true
  };
};
