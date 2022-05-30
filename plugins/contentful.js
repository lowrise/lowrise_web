import * as contentful from 'contentful'

export default (context, inject) => {
  const config = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: 'cdn.contentful.com',
  }
  const client = contentful.createClient(config)

  inject('contentful', client)
  context.$contentful = client
}
