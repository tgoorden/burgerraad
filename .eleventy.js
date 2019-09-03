const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})
const markdownItAttrs = require('markdown-it-attrs')

module.exports = async function (eleventyConfig) {
  eleventyConfig.addFilter('md', function (content) {
    md.use(markdownItAttrs)
    return md.render(content)
  })

  eleventyConfig.addPassthroughCopy('assets')

  return {
    passthroughFileCopy: true
  }
}
