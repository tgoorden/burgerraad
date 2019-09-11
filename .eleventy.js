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

  eleventyConfig.addCollection('sortedPosts', function (blogposts) {
    blogposts = require('./_data/blogposts.json')
    blogposts.sort(function (a, b) {
      if (a.date < b.date) return 1
      if (a.date > b.date) return -1
    })
    return blogposts
  })

  eleventyConfig.addPassthroughCopy('assets')

  return {
    passthroughFileCopy: true
  }
}
