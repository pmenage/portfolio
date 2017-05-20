import React from 'react'
import Layout from '../components/layout'
import projects from '../data/projects'

const Project = ({ project }) => {

  if (!project) return <h1>Project not found</h1>

  return (
    <Layout title={ project.name }>
      <h1>{ project.name }</h1>
      <div className='pure-g'>
        <div className='pure-u-1-2'>
          <div className='description'>
            <h2>Description</h2>
            <div>{ project.description }</div>
          </div>
        </div>
        <div className='pure-u-1-2'>
          <div className='technologies'>
            <h2>Technologies</h2>
            <ul>
            {
              project.technologies.map( (tech, i) => (
                <li>{ tech }</li>
              ))
            }
            </ul>
            <h2>Github</h2>
          </div>
        </div>
        <style jsx>{`
          .pure-g {
            background-color: #ecf0f1;
          }
          .description {
            padding: 2em 3em 3em 6em;
            font-size: 17px;
            line-height: 1.6em;
            color: #2c3e50;
          }
          .technologies {
            padding: 2em 3em 3em 4em;
            font-size: 17px;
            line-height: 1.6em;
            color: #2c3e50;
          }
          h2 {
            font-family: Raleway;
            font-size: 30px;
            font-weight: 700;
            color: #16a085;
          }
        `}</style>
      </div>

      <div className='pure-g'>
        <div className='pure-u-1-2'>
          <div className='left-image'>
          <img src={ project.image } className='pure-img' />
          </div>
        </div>
        <div className='pure-u-1-2'>
          <div className='right-image'>
          <img src={ project.image } className='pure-img' />
          </div>
        </div>
        <style jsx>{`
          .left-image {
            padding: 3em 2em 2em 4em;
          }
          .right-image {
            padding: 3em 4em 2em 2em;
          }
        `}</style>
      </div>

    </Layout>
  )
}

Project.getInitialProps = ({ query, res }) => {
  const project = projects.find(project => project.slug === query.slug)

  if (!project && res) {
    res.statusCode = 404
  }

  return { project }
}

export default Project