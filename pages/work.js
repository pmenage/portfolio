import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import projects from '../data/projects'

export default class extends React.Component {

  static getInitialProps () {
    return { projects: projects }
  }

  render () {
    return (
      <Layout title="Work">
        <h1>This is my work.</h1>
        {
          this.props.projects.map( (project, i) => (
            <Project
              title={ project.name }
              image={ project.image }
              date={ project.date }
              technologies={ project.technologies }
              description={ project.description } >
            </Project>
          ))
        }
      </Layout>
    )
  }
}
