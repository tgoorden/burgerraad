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
    // Quick and dirty sorting of dates
    blogposts.sort(function (a, b) {
      let x = a.date.split('-')
      let y = b.date.split('-')
      if (x[0] < y[0]) return 1
      if (x[0] > y[0]) return -1
      if (x[0] === y[0]) {
        if (x[1] < y[1]) return 1
        if (x[1] > y[1]) return -1
        if (x[1] === y[1]) {
          if (x[2] < y[2]) return 1
          if (x[2] > y[2]) return -1
        }
      }
    })
    return blogposts
  })

  eleventyConfig.addPassthroughCopy('assets')

  return {
    passthroughFileCopy: true
  }
}
