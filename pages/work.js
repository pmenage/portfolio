import React from 'react'
import Layout from '../components/layout'

const posts = [
  { slug: 'aei', title: 'AEI' },
  { slug: 'pulseo', title: 'Pulseo' },
  { slug: 'bumple', title: 'Bumple'},
  { slug: 'purchase-records', title: 'Purchase records application'}
]

export default class extends React.Component {
  
  static async getInitialProps ({ query, res }) {
    const post = posts.find(post => post.slug === query.slug)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render () {
    const { post } = this.props

    if (!post) return <h1>Post not found</h1>

    return <Layout title={ post.title }></Layout>
  }
}