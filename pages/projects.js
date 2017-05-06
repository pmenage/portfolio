import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import H1 from '../components/h1'
import projects from '../data/projects'

export default class extends React.Component {

  static getInitialProps () {
    return { projects: projects }
  }

  render () {
    return (
      <Layout title="Work">
        <H1 title="Some of my projects"></H1>
        {
          this.props.projects.map( (project, i) => (
            <Project
              title={ project.name }
              image={ project.image }
              page={ project.page }
              technologies={ project.technologies }
              description={ project.description }
              github={ project.github }>
            </Project>
          ))
        }
      </Layout>
    )
  }
}
