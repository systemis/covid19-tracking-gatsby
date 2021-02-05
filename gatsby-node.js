const fetch = require(`node-fetch`)
const {fetch_covidtracking_countries_info} = require('./src/apis')
const crypto = require('crypto')
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch_covidtracking_countries_info()
  const data = response['Countries'].splice(0, 10)
  data.map((value, _) => {
    const id = crypto.createHash('md5').update(JSON.stringify(value)+_.toString()).digest('hex')
    let node = {
      Country: value.Country, 
      id: id, 
      parent: '__SOURCE__', 
      children: [], 
      internal: {
        type: `RandomUser`, 
      }, 
    }

    let contentDigest  = createContentDigest(node)
    node.internal.contentDigest = contentDigest;
    console.log('creating node: ', contentDigest)
    createNode(node)
  })


  const test = async () => {
    
    // get data from GitHub API at build time
    const result = await fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
    const resultData = await result.json()
    // create node for build time data example in the docs
    createNode({
      // nameWithOwner and url are arbitrary fields from the data
      nameWithOwner: resultData.full_name,
      url: resultData.html_url,
      // required fields
      id: `example-build-time-data`,
      parent: null,
      children: [],
      internal: {
        type: `Example`,
        contentDigest: createContentDigest(resultData),
      },
    })
  }

  return 
}