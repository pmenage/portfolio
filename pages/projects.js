import React from 'react'
import Layout from '../components/layout'
import projects from '../data/projects'
import { Link } from  '../routes'

const Project = ({ title, image, slug, technologies, description, github }) => (
  <div className='main pure-g'>
    <div className='pure-u-1 project-column'>
      <div className='project'>
        <img src={ image } className='pure-img' />
        <div className="description">
          <span className="title">{ title }</span>
          <span className='view-more'>
            <Link route='project' params={{ slug }}><a>View more</a></Link>
          </span>
          <div className="tech">
          {
            technologies.map( (tech, i) => (
              <span className="technology">{ tech }</span>
            ))
          }
          </div>
        </div>
      </div>
      <div className='view-more-mobile'>
        <Link route='project' params={{ slug }}><a>View more</a></Link>
      </div>
    </div>
    <style jsx>{`
      .project {
        margin: .7em;
        box-shadow: 0 0 .5em #1abc9c;
        position: relative;
      }
      .project-column {
        text-align: center;
      }
      .view-more {
        display: none;
      }
      .view-more-mobile {
        margin: 1.9em 0 1.3em 0;
      }
      .view-more-mobile a {
        color: #fff;
        text-decoration: none;
        border: solid #fff .1em;
        padding: .7em;
      }
      .description {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        padding: .5em;
        background-color: #ecf0f1;
      }
      .title {
        font-family: Raleway;
        font-size: 24px;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: .2em;
      }
      .technology {
        color: #16a085;
      }
      .technology:after {
        content:" / ";
      }
      .technology:last-child:after {
        content:"";
      }
      div {
        color: #34495e;
      }
      
      @media only screen and (min-width: 700px) {
        .project {
          margin: 1em 7em 2em 7em;
        }
        .project-column {
          text-align: left;
        }
        .view-more-mobile {
          display: none;
        }
        .view-more {
          display: inline;
          float: right;
          margin-top: .9em;
          margin-right: 1em;
        }
        .view-more > a {
          text-decoration: none;
          font-family: Raleway;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          background-color: #16a085;
          padding: .7em 1.5em .7em 1.5em;
          border-radius: .8em;
        }
      }

      @media only screen and (min-width: 1110px) {
        .project {
          margin: 1em 15em 3em 15em;
        }
        .project-column {
          text-align: left;
        }
        .description {
          padding: 1.1em;
        }
        .title {
          font-size: 26px;
          padding-bottom: .3em;
        }
        .view-more-mobile {
          display: none;
        }
        .view-more {
          display: inline;
          float: right;
          margin-top: 1.3em;
          margin-right: 1em;
        }
        .view-more > a {
          text-decoration: none;
          font-family: Raleway;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          background-color: #16a085;
          padding: 1em 2em 1em 2em;
          border-radius: 1em;
        }
        .tech {
          margin-top: .8em;
        }
        .technology {
          padding: .3em .4em .3em .4em;
          border-radius: .5em;
          margin-right: 1em;
          background-color: #fff;
        }
        .technology:after {
          content:"";
        }
      }
    `}</style>
  </div>
)


const Projects = () => (
  <Layout title="Work">

    <h1>My projects</h1>
    {
      projects.map( (project, i) => (
        <Project
          title={ project.name }
          image={ project.image }
          slug={ project.slug }
          technologies={ project.technologies }
          description={ project.description }
          github={ project.github }>
        </Project>
      ))
    }
  </Layout>
)

export default Projects